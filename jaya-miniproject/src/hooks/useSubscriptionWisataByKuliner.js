import { useSubscription } from "@apollo/client";
import { GET_WISATA_KULINER_SUBS } from "../graphql/subscriptions";

const useSubscriptionWisataByKuliner = () => {
  const { data: data_kuliner, loading: loading_kuliner, error: error_pantai } = useSubscription(GET_WISATA_KULINER_SUBS);

  return { data_kuliner, loading_kuliner, error_pantai };
};

export default useSubscriptionWisataByKuliner;
