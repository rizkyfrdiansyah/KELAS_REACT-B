import CustomInput from "../../Input";
import InputImageSingle from "../../InputImage/single";
import InputImageMultiple from "../../InputImage/multiple";
import { useEffect, useState } from "react";
import { addMuseum, addAlbumMuseum } from "../../../queries";
import { useMutation } from "@apollo/client";
import { useNavigate } from "react-router-dom";

const TambahMuseum = () => {
  const navigate = useNavigate();
  const [insertMuseum, { data: dataMuseum, loading: museumLoading, error: museumError }] = useMutation(addMuseum, {
    onCompleted: (dataMuseum) => {
      const Album = inputsFoto.map((data) => {
        if (data.filename.length !== 0 || data.imgBase64.length !== 0) {
          return {
            id_museum: dataMuseum.insert_mini_project_museum.returning[0].id,
            img: data.imgBase64,
          };
        }
      });
      if (Album.includes(undefined)) {
        navigate("/admin");
      } else {
        insertAlbumMuseum({
          variables: {
            objects: Album,
          },
        });
      }
    },
  });

  const [insertAlbumMuseum, { loading: albumLoading, error: albumError }] = useMutation(addAlbumMuseum, {
    onCompleted: () => {
      navigate("/admin");
    },
  });

  const [errorMessage, setErrorMessage] = useState([]);
  const [value, setValue] = useState({
    namaTempat: "",
    alamat: "",
    jadwal: "",
    kontak: "",
    deskripsi: "",
    thumbnail: "",
  });

  const [inputsFoto, setinputsFoto] = useState([
    {
      filename: "",
      imgBase64: "",
    },
  ]);

  const ValidasiInput = () => {
    const tempErrorMessage = [];
    if (value.namaTempat.length === 0) {
      tempErrorMessage.push("Nama Tempat tidak Boleh Kosong");
    }
    if (value.alamat.length === 0) {
      tempErrorMessage.push("Alamat tidak Boleh Kosong");
    }
    if (value.deskripsi.length === 0) {
      tempErrorMessage.push("Deskripsi tidak boleh kosong");
    }
    if (value.thumbnail.length === 0) {
      tempErrorMessage.push("Harus Ada Thumbnail");
    }
    setErrorMessage(tempErrorMessage);
    if (tempErrorMessage.length > 0) {
      return false;
    } else {
      return true;
    }
  };

  const HandleSubmit = () => {
    if (ValidasiInput()) {
      insertMuseum({
        variables: {
          objects: {
            nama: value.namaTempat,
            alamat: value.alamat,
            jadwal: value.jadwal,
            kontak: value.kontak,
            deksripsi: value.deskripsi,
            gambar: value.thumbnail,
          },
        },
      });
    }
  };

  // useEffect(() => {
  //   console.log(inputsFoto, value)
  //   console.log(errorMessage)
  // }, [value, inputsFoto])

  return (
    <div className="bg-white shadow-lg p-8 mb-8">
      <h4 className="font-semibold text-[30px] leading-10 tracking-[0.25px] text-[#252A31] mb-6">Tambah Museum</h4>
      <div className="grid md:grid-cols-2 grid-cols-1 md:gap-6 gap-0">
        <CustomInput label={"Nama Tempat"} optional={true} value={value} name={"namaTempat"} placeholder={"Nama Tempat"} setValue={setValue} />
        <CustomInput label={"Alamat Museum"} optional={true} value={value} name={"alamat"} placeholder={"Alamat Museum"} setValue={setValue} />
      </div>
      <div className="grid md:grid-cols-2 grid-cols-1 md:gap-6 gap-0">
        <CustomInput label={"jadwal (Optional)"} optional={false} value={value} name={"jadwal"} placeholder={"Jadwal Museum"} setValue={setValue} />
        <CustomInput label={"Kontak (Optional)"} optional={false} value={value} name={"kontak"} placeholder={"Kontak Museum"} setValue={setValue} regex={/^[ 0-9()+*#]+$/} />
      </div>
      <div className="flex flex-col">
        <label className="text-sm font-medium text-gray-700 tracking-wide">
          Deskripsi <span className={"text-[#C4351A]"}>*</span>
        </label>
        <textarea
          className="w-full text-base px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-[#0A6C62] mt-2 mb-4 resize-none"
          rows={4}
          placeholder="Deskripsi Museum"
          value={value.deskripsi}
          name="deskripsi"
          onChange={(e) => {
            setValue({ ...value, [e.target.name]: e.target.value });
          }}
        >
          {value.deskripsi}
        </textarea>
      </div>
      <div className="flex flex-col pb-6 border-b">
        <InputImageSingle label={"Thumbnail"} name={"thumbnail"} optional={true} id={"Thumbnail"} value={value} setValue={setValue} />
      </div>
      <div className="py-6">
        <InputImageMultiple label={"Foto (Optional)"} id={"Multiple"} inputsFoto={inputsFoto} setinputsFoto={setinputsFoto} />
      </div>
      <div>
        {errorMessage.length > 0 ? (
          <ul className="list-disc">
            {errorMessage.map((message, index) => (
              <li key={index} className="text-sm text-red-600 font-normal leading-5 tracking-tight">
                {message}
              </li>
            ))}
          </ul>
        ) : (
          ""
        )}
      </div>
      <div className="flex justify-end py-2">
        {museumLoading || albumLoading ? (
          <span className="text-3xl animate-pulse">Loading...</span>
        ) : (
          <button className="py-[10px] px-8 text-white bg-[#0B3B36] text-sm leading-5 tracking-[0.25px] font-medium rounded-lg" onClick={() => HandleSubmit()}>
            Simpan Dan Unggah
          </button>
        )}
      </div>
    </div>
  );
};

export default TambahMuseum;
