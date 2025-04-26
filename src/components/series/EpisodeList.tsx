import  { FC } from 'react'

type Props = {
   data : {
    img : string;
    title : string;
    description : string;
    duration : string;
    episode : number;
   }[]
  }

const EpisodeList: FC<Props> = ({data}) => {
  return (
    <div className='mt-4 lg:text-lg'>
        <h1 className='text-sm lg:text-xl'>Episode</h1>
        <div className="mt-2 space-y-2">
            {data.map((episode, index) => (
                <section key={index} className=' flex items-center rounded py-1 gap-4 px-2  bg-primary hover:bg-[#424242] lg:py-2 lg:gap-6 group cursor-pointer' >
                    <span>{episode.episode}</span>
                    <div className='w-[58px] h-8 bg-cover bg-center lg:w-44 lg:h-24' style={{ backgroundImage : `url(${episode.img})` }}></div>
                    <div className='space-y-1  lg:flex-1 lg:h-24'>
                        <section className='flex justify-between'>
                            <p>{episode.title}</p>
                            <p className='text-gray-400'>{episode.duration}</p>
                        </section>
                        <p className='truncate w-40 font-light  lg:overflow-visible lg:whitespace-normal lg:text-clip lg:w-full group-hover:text-gray-400'>{episode.description}</p>
                    </div>
                </section>
            ))}
        </div>
    </div>
  )
}

export default EpisodeList