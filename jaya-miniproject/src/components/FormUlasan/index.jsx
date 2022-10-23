import React, { useState } from "react";
// Apollo Client
import { useQuery, useMutation } from "@apollo/client";
// Hasura GraphQL Queries
import { GET_LISTULASAN, GET_WISATA_AND_ULASAN } from "../../graphql/queries";
// Hasura GraphQL Mutations
import { INSERT_ULASAN } from "../../graphql/mutations";

const FormUlasan = ({ dataWisata }) => {
  const idwisata = dataWisata.wisata[0].id;

  const { data, loading, error, refetch } = useQuery(GET_LISTULASAN, {
    fetchPolicy: "no-cache",
    nextFetchPolicy: "no-cache",
  });

  const [insertWisata, { loading: loadingInsert }] = useMutation(INSERT_ULASAN, { refetchQueries: [GET_LISTULASAN, GET_WISATA_AND_ULASAN] });

  const [inputs, setInputs] = useState({
    nama: "",
    email: "",
    ulasan: "",
  });

  const handleInput = (value, key) => {
    const newInputs = { ...inputs };

    newInputs[key] = value;

    setInputs(newInputs);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    insertWisata({
      variables: {
        object: {
          nama: inputs.nama,
          email: inputs.email,
          ulasan: inputs.ulasan,
          id_wisata: idwisata,
        },
      },
    });

    setInputs({
      nama: "",
      email: "",
      ulasan: "",
    });
  };

  return (
    <div className="col-12 col-lg-7">
      <div className="section-ulasan">
        <form className="row form-ulasan" onSubmit={handleSubmit}>
          <h4 className="pb-2">Beri Ulasan Mengenai Wisata</h4>
          <hr />
          <div className="col-md-6 mt-4">
            <input type="text" name="nama" className="form-control input-ulasan" placeholder="Masukkan Nama" aria-label="Masukkan Nama" value={inputs.nama} onChange={(e) => handleInput(e.target.value, e.target.name)} />
          </div>

          <div className="col-md-6 mt-4">
            <input type="email" name="email" className="form-control input-ulasan" placeholder="Masukkan Email" aria-label="Masukkan Email" value={inputs.email} onChange={(e) => handleInput(e.target.value, e.target.name)} />
          </div>

          <div className="col-12 mt-4">
            <textarea name="ulasan" className="form-control input-ulasan" placeholder="Masukkan Ulasan" aria-label="Masukkan Ulasan" rows={7} value={inputs.ulasan} onChange={(e) => handleInput(e.target.value, e.target.name)} />
          </div>

          <div className="col-12 mt-3">
            <button type="submit" className="btn btn-primary btn-submit-ulasan">
              Kirim
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default FormUlasan;
