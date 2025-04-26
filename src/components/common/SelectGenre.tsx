import { useState } from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faChevronDown } from "@fortawesome/free-solid-svg-icons"
import { useNavigate } from "react-router-dom"

const listGenre : string[] = [ 
    "Aksi",
    "Anak-anak",
    "Anime",
    "Britania",
    "Drama",
    "Fantasi Ilmiah & Fantasi",
    "Kejahatan",
    "KDrama",
    "Komedi",
    "Petualangan",
    "Perang",
    "Romantis",
    "Sains & Alam",
    "Thriller"
]

const SelectGenre = () => {

  const [isOpen, setIsOpen] = useState<boolean>(false)
  const [selected, setSelected] = useState<string>("Genre")

  const navigate = useNavigate()

  return (
    <div className="hidden absolute w-40 left-27  top-12 right-1/2 z-10 lg:block">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="bg-primary w-full text-white py-2 px-4 font-semibold rounded focus:outline-none cursor-pointer flex justify-between items-center" 
      >
        <span>{selected}</span> <FontAwesomeIcon  className={`${isOpen && "rotate-180"} duration-300`} icon={faChevronDown}/>
      </button>

      {isOpen && (
        <div className="absolute mt-1 bg-primary w-[300%] text-white rounded shadow-md grid grid-cols-2 overflow-hidden  z-10">
          {listGenre.map((genre, index) => (
            <div
              key={index}
              onClick={() => {
                setSelected(genre);
                setIsOpen(false);
                navigate(`?genre=${genre}`, { replace : false })
              }}
              className="hover:bg-[#3D4142]  py-2 px-4 cursor-pointer"
            >
              {genre}
            </div>
          ))}
        </div>
      )}
    </div>
  )
}

export default SelectGenre