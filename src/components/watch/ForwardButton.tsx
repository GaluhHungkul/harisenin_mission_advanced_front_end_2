import { faForward } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

const ForwardButton = ({skip} : { skip: (value:number) => void }) => {
  return (
    <button onClick={() => skip(10)} title="Maju 10 detik" className="hover:bg-gray-500/50 lg:scale-110 duration-100 rounded-full lg:py-1 lg:px-3 cursor-pointer">
        <FontAwesomeIcon className="lg:text-lg" icon={faForward} />
    </button>
  )
}

export default ForwardButton