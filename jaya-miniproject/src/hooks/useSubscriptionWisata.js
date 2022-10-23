import { useSubscription } from "@apollo/client";
import { GET_NEW_WISATA } from "../graphql/subscriptions";

const useSubscriptionWisata = () => {
  const { data: dataWisata, loading: loadingWisata, error: errorWisata } = useSubscription(GET_NEW_WISATA);

  return { dataWisata, loadingWisata, errorWisata };
};

export default useSubscriptionWisata;
