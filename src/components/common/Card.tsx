
import { Star } from "lucide-react";
import { forwardRef, ReactNode } from "react";

type Props = {
  img: string;
  isVertical: boolean;
  children?: ReactNode;
  rating : number;
  title : string
};

const Card = forwardRef<HTMLDivElement, Props>(({ img, isVertical , children, rating, title,  ...rest }, ref) => {

  return (
    <div
      ref={ref}
      {...rest}
      className={`relative flex items-end justify-between p-4 bg-cover bg-no-repeat bg-center text-white  rounded z-2
        ${isVertical
          ? "w-24 h-36 lg:min-w-[234px] lg:h-[365px]"
          : "w-full h-[151px] lg:w-[302px] lg:h-[162px]"} group`}
      style={{ backgroundImage: `url(${img})` }}
    >
      {children}
        {!isVertical && (
          <>
          <span className="absolute bottom-2 left-0   text-sm font-semibold w-1/2 lg:text-[12px]">{title}</span>
          <span className="absolute bottom-2 right-4 font-semibold  flex items-center gap-1 w-max" >{rating}<Star />/10</span>
          </>
        )}
    </div>
  );
}); 

Card.displayName = "Card"; 
export default Card;
