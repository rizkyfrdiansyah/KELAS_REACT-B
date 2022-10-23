import { useSubscription } from "@apollo/client";
import { GET_WISATA_PANTAI_SUBS } from "../graphql/subscriptions";

const useSubscriptionWisataByPantai = () => {
  const { data: data_pantai, loading: loading_alam, error: error_pantai } = useSubscription(GET_WISATA_PANTAI_SUBS);

  return { data_pantai, loading_alam, error_pantai };
};

export default useSubscriptionWisataByPantai;
