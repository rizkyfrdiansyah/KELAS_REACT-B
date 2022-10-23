import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

// Apollo Client
import { useQuery, useMutation } from "@apollo/client";
// Hasura GraphQL Queries
import { GET_LISTBERITA } from "../../graphql/queries";
// Hasura GraphQL Mutations
import { INSERT_BERITA } from "../../graphql/mutations";

// Third Party
import Swal from "sweetalert2";

// Universal Cookies
import Cookies from "universal-cookie";

const FormInputBerita = () => {
  const navigate = useNavigate();

  const cookies = new Cookies();

  const cookiesAuth = cookies.get("auth");

  const [inputs, setInputs] = useState({
    judul: "",
    deskripsi: "",
    tgl_posting: "",
    gambar: "",
    id_admin: "",
  });

  const [baseImage, setBaseImage] = useState("");

  const { data, loading, error, refetch } = useQuery(GET_LISTBERITA);

  const [insertBerita, { loading: loadingInsert }] = useMutation(INSERT_BERITA, {
    refetchQueries: [GET_LISTBERITA],
    onCompleted: (data) => {
      Swal.fire({
        title: "Sukses!",
        text: "Data Berhasil Disimpan",
        icon: "success",
      });
      navigate("/kelola-berita");
    },
  });

  const handleInput = (value, key) => {
    const newInputs = { ...inputs };

    newInputs[key] = value;

    setInputs(newInputs);
  };

  const uploadImage = async (e) => {
    const file = e.target.files[0];
    const base64 = await convertBase64(file);
    setBaseImage(base64);
  };

  const convertBase64 = (file) => {
    return new Promise((resolve, reject) => {
      const fileReader = new FileReader();
      fileReader.readAsDataURL(file);

      fileReader.onload = () => {
        resolve(fileReader.result);
      };

      fileReader.onerror = (error) => {
        reject(error);
      };
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    insertBerita({
      variables: {
        object: {
          judul: inputs.judul,
          deskripsi: inputs.deskripsi,
          tgl_posting: inputs.tgl_posting,
          gambar: baseImage,
          id_admin: cookiesAuth.id,
        },
      },
    });

    setInputs({
      judul: "",
      deskripsi: "",
      tgl_posting: "",
      gambar: "",
      id_admin: "",
    });

    setBaseImage("");
  };

  const handleReset = (e) => {
    e.preventDefault();

    setBaseImage("");
    navigate("/kelola-berita");
  };

  return (
    <section className="tambahberita mb-3 pb-3 mt-3 pt-3">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-md-10">
            <form onSubmit={handleSubmit} onReset={handleReset}>
              <div className="row mb-3">
                <label htmlFor="input-judul-berita" className="col-sm-2 col-form-label">
                  Judul Berita
                </label>
                <div className="col-sm-10">
                  <input type="text" name="judul" className="form-control" id="input-judul-berita" required value={inputs.judul} onChange={(e) => handleInput(e.target.value, e.target.name)} />
                </div>
              </div>

              <div className="row mb-3">
                <label htmlFor="deskripsi" className="col-sm-2 col-form-label">
                  Deskripsi
                </label>
                <div className="col-sm-10">
                  <textarea name="deskripsi" className="form-control" id="deskripsi" required rows="5" value={inputs.deskripsi} onChange={(e) => handleInput(e.target.value, e.target.name)} />
                </div>
              </div>

              <div className="row mb-3">
                <label htmlFor="input-tgl-posting" className="col-sm-2 col-form-label">
                  Tanggal Posting
                </label>
                <div className="col-sm-10">
                  <input type="date" name="tgl_posting" className="form-control" id="input-tgl-posting" required value={inputs.tgl_posting} onChange={(e) => handleInput(e.target.value, e.target.name)} />
                </div>
              </div>

              <div className="row mb-3">
                <label htmlFor="gambar-berita" className="col-sm-2 col-form-label">
                  Gambar
                </label>
                <div className="col-sm-10">
                  <input
                    className="form-control"
                    id="gambar-berita"
                    required
                    type="file"
                    onChange={(e) => {
                      uploadImage(e);
                    }}
                  />
                </div>
              </div>

              <div className="row mb-3">
                <label htmlFor="preview-gambar" className="col-sm-2 col-form-label">
                  Preview
                </label>
                <div className="col-sm-10">
                  <img src={baseImage} height="300px" width="100%" alt="...." style={{ borderRadius: "15px" }} />
                </div>
              </div>

              <div className="row mb-3">
                <div className="col-sm-2"></div>
                <div className="col-sm-10">
                  <button type="submit" className="btn btn-primary btn-simpan">
                    Simpan
                  </button>
                  <button type="reset" className="btn btn-danger ms-2 btn-batal">
                    Batal
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FormInputBerita;
