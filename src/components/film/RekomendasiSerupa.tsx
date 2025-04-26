import { FC } from "react"
import Card from "../common/Card"

type Props = {
    data : string[]
}

const RekomendasiSerupa : FC<Props> = ({data}) => {
  return (
    <div className='mt-4 lg:text-lg'>
    <h1 className='text-sm lg:text-2xl lg:mb-7'>Rekomendasi Serupa</h1>
    <div className="mt-2 flex gap-[10px] lg:gap-7">
        {data.map((img, index) => (
            <Card key={index} img={img} isVertical={true}/>
        ))}
    </div>
</div>
  )
}

export default RekomendasiSerupa