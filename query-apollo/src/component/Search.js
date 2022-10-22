import React, { useEffect } from "react";
import { gql, useLazyQuery } from "@apollo/client";
import { Link, useLocation, useParams } from "react-router-dom";

import Header from "./Header";
import InputIdPasengger from "./InputIdPasengger";
import ListPassenger from "./ListPassenger";
import LoadingSVG from "./LoadingSVG";

const GET_PENGUNJUNG_BY_ID = gql`
  query MyQuery($id: Int!) {
    pengunjung_by_pk(id: $id) {
      jenisKelamin
      id
      nama
      umur
    }
  }
`;

function Search() {
  const param = useParams();
  const location = useLocation();

  const [get_pengunjung_by_id, { data, loading, error }] = useLazyQuery(GET_PENGUNJUNG_BY_ID);

  useEffect(() => {
    get_pengunjung_by_id({
      variables: { id: param.id },
    });
  }, [location]);

  return (
    <div>
      <Header />
      <InputIdPasengger id={param.id} />
      {loading || data === undefined ? <LoadingSVG /> : <ListPassenger data={[data.pengunjung_by_pk]} />}
      <div style={{ textAlign: "center" }}>
        <button className="rounded border-0 btn-danger text-light p-1 m-2">
          <Link to="/" style={{ textDecoration: "none", color: "white", cursor: "pointer" }}>
            Back To Home
          </Link>
        </button>
      </div>
    </div>
  );
}

export default Search;
