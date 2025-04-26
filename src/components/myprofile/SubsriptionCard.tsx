import { useLocation } from "react-router-dom"
import SubscriptionOn from "./SubscriptionOn"
import SubscriptionOff from "./SubscriptionOff"

const SubscriptionCard = () => {

  const { search } = useLocation()
  const query = new URLSearchParams(search)
  const isSubsribe = query.get("isSubscribe") === "true"

  return (
    <>
    {isSubsribe ? <SubscriptionOn /> : <SubscriptionOff />}
    </>
  )
}

export default SubscriptionCard 