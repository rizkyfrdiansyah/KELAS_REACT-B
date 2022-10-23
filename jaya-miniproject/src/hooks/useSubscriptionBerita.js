import { useSubscription } from "@apollo/client";
import { GET_NEW_BERITA } from "../graphql/subscriptions";

const useSubscriptionBerita = () => {
  const { data: dataBerita, loading: loadingBerita, error: errorBerita } = useSubscription(GET_NEW_BERITA);

  return { dataBerita, loadingBerita, errorBerita };
};

export default useSubscriptionBerita;
