import { FetchedAllData, ListDataPerPage } from "@/types/allTypes";
import { FilmtmbdApi } from "@/types/allTypes";
import toast  from "react-hot-toast"

const getId = () => localStorage.getItem("userId") ?? "1"

export const getMovieData = async (query: string): Promise<FilmtmbdApi[]> => {
  try {
    const separator = query.includes("?") ? "&" : "?"
    const res = await fetch(`${import.meta.env.VITE_TMDB_API}${query}${separator}api_key=${import.meta.env.VITE_TMDB_API_KEY}`);
    if (!res.ok) throw new Error("Failed to fetch");
    
    const data = await res.json();

    if (!data.results || !Array.isArray(data.results)) {
      throw new Error("Invalid data format");
    }

    return data.results.slice(0,10); 
  } catch (error) {
    console.error("getData error:", error);
    return []; 
  }
};

export const getAllData = async (data: ListDataPerPage[], setter: (value: FetchedAllData[]) => void) => {
  try {
    const responses = await Promise.all(
        data.map(async (list) => {
          const res = await getMovieData(list.query);
          const fallbacked = res.map((film) => ({
            ...film,
            backdrop_path: film.backdrop_path
              ? import.meta.env.VITE_BASE_URL_TMDB_IMG + film.backdrop_path
              : "/assets/img/home/2/banner/banner1.png",
            poster_path: film.poster_path
              ? import.meta.env.VITE_BASE_URL_TMDB_IMG + film.poster_path
              : "/assets/img/home/2/card/card1.png",
              title :  film?.title || film?.name || film?.original_title || film?.original_name || "Ted Lasso"
          }));
          
          return {
            title: list.title,
            data: fallbacked,
          };
        })
      );
      setter(responses);
  } catch (error) {
    console.log("Error fetchAll Data : " , error)
    return {
        title : "Something went wrong",
        data : []
    }
  }
};

export const getMyMovieList = async () => {
    try {
        const id = getId()
        const res = await fetch(`${import.meta.env.VITE_BASE_URL_MOCKAPI_USERS}/${id}`)
        if(!res.ok) throw new Error("Gagal mengambil data")
        const data = await res.json()
        return data.listMovie
    } catch (error) {
        console.log("Error : " , error)
        return []
    }
}

export const getMyProfile = async () => {
  
  try {
    const id = getId()
    const res = await fetch(`${import.meta.env.VITE_BASE_URL_MOCKAPI_USERS}/${id}`)
    if(!res.ok) throw new Error("Gagal mengambil data")
    const data = await res.json()
    return data
  }
  catch (error) {
    console.log("Error : " , error)
    toast.error("Terjadi kesalahan saat mengambil data, coba lagi nanti")
  }
}

export const addToMyMovieList = async ({title, img, vote_average} : { title : string, img : string, vote_average : number }) => {

  const loadingToast = toast.loading("Menambahkan movie...")

    try {
        const id = getId()
      
        const user = await getMyProfile()
        if(!user) throw new Error("Gagal mengambil data user")
        const isExist = user.listMovie.some((film) => film.title === title)
        if(isExist) {
          toast.error("Film sudah ada di dalam list movie anda")
          toast.dismiss(loadingToast)
          return
        }

        const newMovie = {
          title, img, vote_average,
        }

        const res = await fetch(`${import.meta.env.VITE_BASE_URL_MOCKAPI_USERS}/${id}`, {
            method : "PUT",
            headers: {
                "Content-Type": "application/json"
            },
            body : JSON.stringify({
                ...user,
                listMovie : [...user.listMovie, newMovie]
            })
        })
        if(!res.ok) throw new Error("Gagal menambahkan data")
        toast.success("Film berhasil ditambahkan ke dalam list anda")
        toast.dismiss(loadingToast)
      } catch (error) {
        console.log("Error : " , error)
        toast.error("Terjadi kesalahan saat menambahkan film, coba lagi nanti")
        toast.dismiss(loadingToast)
      }
}
    
export const deleteFromMyMovieList = async (id:string) => {
      
  const loadingToast = toast.loading("menghapus movie...")
      
  try {
    const userId = getId()
    const user = await getMyProfile()
    if(!user) throw new Error("Gagal mengambil data user")
    const isExist = user.listMovie.some((film) => film.id === id)
    if(!isExist) {
      toast.error("Film tidak ada di dalam list movie anda")
      toast.dismiss(loadingToast)
      return
    }
    const newMovie = user.listMovie.filter((film) => film.id !== id)
    const res = await fetch(`${import.meta.env.VITE_BASE_URL_MOCKAPI_USERS}/${userId}`, {
      method : "PUT",
      headers: {
        "Content-Type": "application/json"
      },
      body : JSON.stringify({
        ...user,
        listMovie : newMovie
      })
    })
    if(!res.ok) throw new Error("Gagal menghapus film dari list")
    toast.success("Film berhasil dihapus dari list anda")
    toast.dismiss(loadingToast)
  } catch (error) {
    console.log("Error : " , error)
    toast.error("Terjadi kesalahan saat menghapus film, coba lagi nanti")
    toast.dismiss(loadingToast)
  }
}

export const changeProfile = async ({username, email, kataSandi,id} : { username : string; email : string; kataSandi : string; id : string }) => {
  const loadingToast = toast.loading("Mengubah data...")
  try {
    const res = await fetch(`${import.meta.env.VITE_BASE_URL_MOCKAPI_USERS}/${id}`, {
      method : "PUT",
      headers: {
        "Content-Type": "application/json"
      },
      body : JSON.stringify({
        username, email, kataSandi
      })
    })
    if(!res.ok) throw new Error("Gagal mengubah data")
    toast.success("Data berhasil diubah")
  } catch (error) {
    console.log("Error : " , error)
    toast.error("Terjadi kesalahan saat mengubah data, coba lagi nanti")
  } finally {
    toast.dismiss(loadingToast)
  }
}