import React from "react";
import { gql, useQuery } from "@apollo/client";

import Header from "./Header";
import InputIdPasengger from "./InputIdPasengger";
import ListPassenger from "./ListPassenger";
import LoadingSVG from "./LoadingSVG";

const GET_PENGUNJUNG = gql`
  query MyQuery {
    pengunjung {
      id
      jenisKelamin
      nama
      umur
    }
  }
`;
function Home() {
  const { data, loading, error } = useQuery(GET_PENGUNJUNG);
  return (
    <div>
      <Header />
      <InputIdPasengger />
      {loading ? <LoadingSVG /> : <ListPassenger data={data.pengunjung} />}
    </div>
  );
}

export default Home;
