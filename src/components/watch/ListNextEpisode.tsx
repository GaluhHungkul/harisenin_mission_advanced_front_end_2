import { FC } from "react";
import { useNavigate } from "react-router-dom";

type Props = {
    data : {
     img : string;
     title : string;
     description : string;
     duration : string;
     episode : number;
    }[]
   }

const ListNextEpisode : FC<Props>= ({data}) => {

    const navigate = useNavigate()

  return (
    <div className="text-[10px] lg:text-base">
        {data.map((data, index) => (
            <div onClick={() => navigate(`/watch?episode=${data.episode}`)} title={`Episode ${data.episode} : ${data.title}`} key={index} className="text-start hover:bg-primary px-2 py-1 lg:px-4 lg:py-2 group/parent duration-100 ">
                <p >Episode {data.episode}</p>
                <div className="hidden group-hover/parent:flex lg:mt-2">
                    <div style={{ backgroundImage : `url(${data.img})` }} className="lg:w-[170px] hidden lg:block lg:min-h-24 bg-cover bg-center" />
                    <div className="lg:w-1/2 text-start lg:ml-4 lg:text-sm">
                        <p>{data.title}</p>
                        <p className="text-gray-300 lg:line-clamp-3">{data.description}</p>
                    </div>
                </div>
            </div>
        ))}
    </div>
  )
}

export default ListNextEpisode