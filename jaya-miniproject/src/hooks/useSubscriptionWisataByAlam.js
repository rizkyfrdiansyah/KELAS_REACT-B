import { useSubscription } from "@apollo/client";
import { GET_WISATA_ALAM_SUBS } from "../graphql/subscriptions";

const useSubscriptionWisataByAlam = () => {
  const { data: data_alam, loading: loading_alam, error: error_alam } = useSubscription(GET_WISATA_ALAM_SUBS);

  return { data_alam, loading_alam, error_alam };
};

export default useSubscriptionWisataByAlam;
