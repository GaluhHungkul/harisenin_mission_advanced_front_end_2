import ReasonSubscription from "../components/common/ReasonSubscription"
import ListPaketSubscription from "../components/subscription/ListPaketSubscription"


const Subscription = () => {
  return (
    <div className="  text-white mb-10">
        <main className="flex flex-col items-center min-h-[348px] mt-8  ">
          <ReasonSubscription gridMobile={2}/>
          <ListPaketSubscription />
        </main>
    </div>
  )
}

export default Subscription