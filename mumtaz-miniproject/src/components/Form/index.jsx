import React, { useCallback, useState, useEffect } from "react";
/** React Dropzone */
import { useDropzone } from "react-dropzone";
/** Apollo client */
import { useMutation, useQuery } from "@apollo/client";
/** GraphQL */
import { GET_AUTHORS } from "../../GraphQL/Users/queries";
/** React-Quill */
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";

const Form = ({ inputs, setInputs, addNewAuthor, addNewPost, dataAuthors, isFormPost, isEdit, setIsEdit, isLoginPage, handleLogin, setIsFormPost, updatePostData, updateNewAuthorData }) => {
  console.log(isEdit);

  const [imageBase64, setImageBase64] = useState("");

  const [valueQuill, setValueQuill] = useState("");

  useEffect(() => {
    if (inputs[1].value !== "") {
      setValueQuill(inputs[1].value);
      // console.log(inputs[1].value);
    }
  }, [inputs]);

  const onDrop = useCallback((acceptedFiles) => {
    getBase64(acceptedFiles[0])
      .then((result) => {
        if (result) {
          setImageBase64(result);
        } else {
          setImageBase64("");
        }
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  const { getRootProps, getInputProps } = useDropzone({ onDrop });

  const getBase64 = (file) => {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => resolve(reader.result);
      reader.onerror = (error) => reject(error);
    });
  };

  const categories = ["Sosial", "Politik", "Agama", "Budaya"];

  const handleSubmit = (e) => {
    e.preventDefault();

    if (isLoginPage) {
      const authorData = {
        username: inputs[0].value,
        password: inputs[1].value,
      };
      handleLogin(authorData);
    }

    if (isFormPost) {
      if (isEdit === true) {
        console.log("inputs", inputs);
        if (imageBase64 === "") {
          const newUpdatePostData = {
            judul: inputs[0].value,
            isi: valueQuill,
            post_banner: inputs[4].value,
            id_penulis: inputs[6].value,
            kategori: inputs[2].value,
            id: inputs[5].value,
          };
          // console.log("imagebase64", imageBase64);
          // console.log("newUpdatePostData", newUpdatePostData);
          updatePostData(newUpdatePostData);
        } else {
          const newUpdatePostData = {
            judul: inputs[0].value,
            isi: valueQuill,
            post_banner: imageBase64,
            id_penulis: inputs[6].value,
            kategori: inputs[2].value,
            id: inputs[5].value,
          };
          // console.log("imagebase64", imageBase64);
          // console.log("newUpdatePostData", newUpdatePostData);
          updatePostData(newUpdatePostData);
        }
      } else {
        const newPost = {
          judul: inputs[0].value,
          isi: valueQuill,
          post_banner: imageBase64,
          id_penulis: inputs[3].value,
          kategori: inputs[2].value,
        };

        addNewPost(newPost);
      }
    } else if (isFormPost === false) {
      if (isEdit === true) {
        if (imageBase64 === "") {
          const newUpdateAuthorData = {
            nama: inputs[0].value,
            profile_pic: inputs[1].value,
            role: inputs[2].value,
            username: inputs[3].value,
            password: inputs[4].value,
            id: inputs[5].value,
          };
          updateNewAuthorData(newUpdateAuthorData);
        } else {
          const newUpdateAuthorData = {
            nama: inputs[0].value,
            profile_pic: imageBase64,
            role: inputs[2].value,
            username: inputs[3].value,
            password: inputs[4].value,
            id: inputs[5].value,
          };
          updateNewAuthorData(newUpdateAuthorData);
        }
      } else {
        const newAuthor = {
          nama: inputs[0].value,
          profile_pic: imageBase64,
          role: inputs[2].value,
          username: inputs[3].value,
          password: inputs[4].value,
        };

        addNewAuthor(newAuthor);
      }
    }
  };

  const handleChange = (value, index) => {
    const newInputs = [...inputs];
    newInputs[index].value = value;
    setInputs(newInputs);
    console.log(inputs);
  };

  return (
    <form onSubmit={handleSubmit}>
      {inputs.map((input, inputIdx) => (
        <div key={inputIdx}>
          {input.type === "hidden" ? "" : <label className="form-label mb-3">{input.label}</label>}
          {input.type === "select" ? (
            <select className="form-select mb-3" onChange={(e) => handleChange(e.target.value, inputIdx)}>
              <option value="">Pilih Penulis</option>
              {dataAuthors.users.map((author, authorIdx) => (
                <option key={authorIdx} value={author.id} selected={author.id === inputs[2].value ? "selected" : ""}>
                  {author.nama}
                </option>
              ))}
            </select>
          ) : input.label === "Isi Konten" ? (
            // <textarea className='form-control mb-3' rows='3' onChange={(e) => handleChange(e.target.value, inputIdx)} value={input.value} required />
            <ReactQuill
              className="mb-3"
              theme="snow"
              // defaultValue={input.value}
              value={valueQuill}
              onChange={setValueQuill}
            />
          ) : input.label === "Kategori" ? (
            categories.map((category, categoryIdx) => (
              <div key={categoryIdx} className="form-check mb-3">
                <input className="form-check-input" type="radio" value={category} onChange={(e) => handleChange(e.target.value, inputIdx)} checked={category === inputs[2].value ? "checked" : ""} required />
                <label className="form-check-label">{category}</label>
              </div>
            ))
          ) : (
            <input className="form-control mb-3" type={input.type} value={input.value} onChange={(e) => handleChange(e.target.value, inputIdx)} disabled={input.label === "Penulis" ? true : false} required />
          )}
        </div>
      ))}
      <div {...getRootProps()} id="uploadImage">
        <input defaultValue={inputs[inputs.length - 1].value ? inputs[inputs.length - 1].value : imageBase64} {...getInputProps()} />
      </div>
      {isLoginPage ? (
        <div className="row mx-1">
          <button type="submit" className="btn btn-light">
            Submit
          </button>
        </div>
      ) : (
        <div className="row mx-1">
          <button type="button" className="btn btn-outline-light mb-3" onClick={() => document.getElementById("uploadImage").click()}>
            Upload Foto
          </button>
          <button type="submit" className="btn btn-light">
            Submit
          </button>
        </div>
      )}
    </form>
  );
};

export default Form;
