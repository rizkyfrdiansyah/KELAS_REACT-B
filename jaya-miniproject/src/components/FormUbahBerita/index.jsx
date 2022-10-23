import React, { useEffect, useState } from "react";
import LoadingSvg from "../LoadingSvg/LoadingSvg";
import { useNavigate } from "react-router-dom";
import { useParams } from "react-router-dom";

// Apollo Client
import { useQuery, useMutation } from "@apollo/client";
// Hasura GraphQL Queries
import { GET_LISTBERITA, GET_BERITA_BY_ID } from "../../graphql/queries";
// Hasura GraphQL Mutations
import { UPDATE_BERITA } from "../../graphql/mutations";

// Third Party
import Swal from "sweetalert2";

// Universal Cookies
import Cookies from "universal-cookie";

const FormUbahBerita = () => {
  const { id } = useParams();

  const navigate = useNavigate();

  const [inputs, setInputs] = useState({
    judul: "",
    deskripsi: "",
    tgl_posting: "",
    gambar: "",
  });

  const [baseImage, setBaseImage] = useState("");

  const [isDataReady, setIsDataReady] = useState(false);

  const cookies = new Cookies();

  const cookiesAuth = cookies.get("auth");

  const { data, loading, error, refetch } = useQuery(GET_BERITA_BY_ID, {
    variables: { id: id },
  });

  const [updateBerita, { loading: loadingUpdate }] = useMutation(UPDATE_BERITA, {
    refetchQueries: [GET_LISTBERITA],
    onCompleted: (data) => {
      Swal.fire({
        title: "Sukses!",
        text: "Data Berhasil Diupdate",
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
    setInputs({ ...inputs, gambar: base64 });
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

    updateBerita({
      variables: {
        id: id,
        judul: inputs.judul,
        deskripsi: inputs.deskripsi,
        tgl_posting: inputs.tgl_posting,
        gambar: inputs.gambar,
        id_admin: cookiesAuth.id,
      },
    });

    setInputs({
      judul: "",
      deskripsi: "",
      tgl_posting: "",
      gambar: "",
    });

    setBaseImage("");
  };

  const handleReset = (e) => {
    e.preventDefault();

    setBaseImage("");
    navigate("/kelola-berita");
  };

  useEffect(() => {
    if (!loading && data) {
      setInputs({
        judul: data?.berita[0].judul,
        deskripsi: data?.berita[0].deskripsi,
        tgl_posting: data?.berita[0].tgl_posting,
        gambar: data?.berita[0].gambar,
      });
      setIsDataReady(true);
    }
  }, [loading, data]);

  return (
    <section className="ubahberita mb-3 pb-3 mt-3 pt-3">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-md-10">
            {!isDataReady ? (
              <LoadingSvg />
            ) : (
              <form onSubmit={handleSubmit} onReset={handleReset}>
                <div className="row mb-3">
                  <label htmlFor="input-judul-berita" className="col-sm-2 col-form-label">
                    Judul Berita
                  </label>
                  <div className="col-sm-10">
                    <input type="text" name="judul" className="form-control" id="input-judul-berita" value={inputs.judul} onChange={(e) => handleInput(e.target.value, e.target.name)} />
                  </div>
                </div>

                <div className="row mb-3">
                  <label htmlFor="deskripsi" className="col-sm-2 col-form-label">
                    Deskripsi
                  </label>
                  <div className="col-sm-10">
                    <textarea name="deskripsi" className="form-control" id="deskripsi" rows="5" value={inputs.deskripsi} onChange={(e) => handleInput(e.target.value, e.target.name)} />
                  </div>
                </div>

                <div className="row mb-3">
                  <label htmlFor="input-tgl-posting" className="col-sm-2 col-form-label">
                    Tanggal Posting
                  </label>
                  <div className="col-sm-10">
                    <input type="date" name="tgl_posting" className="form-control" id="input-tgl-posting" value={inputs.tgl_posting} onChange={(e) => handleInput(e.target.value, e.target.name)} />
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
                      type="file"
                      onChange={(e) => {
                        uploadImage(e);
                      }}
                    />
                  </div>
                </div>

                <div className="row mb-3">
                  <label htmlFor="image-berita" className="col-sm-2 col-form-label">
                    Preview
                  </label>
                  <div className="col-sm-10">
                    <img src={inputs.gambar} height="300px" width="100%" alt="...." style={{ borderRadius: "15px" }} />
                  </div>
                </div>

                <div className="row mb-3">
                  <div className="col-sm-2"></div>
                  <div className="col-sm-10">
                    <button type="submit" className="btn btn-primary btn-simpan">
                      Ubah
                    </button>
                    <button type="reset" className="btn btn-danger ms-2 btn-batal">
                      Batal
                    </button>
                  </div>
                </div>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default FormUbahBerita;
