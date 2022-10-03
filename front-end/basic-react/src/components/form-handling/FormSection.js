import React, { useState } from "react";
import Swal from "sweetalert2";

const FormSection = () => {
  const [fullname, setFullname] = useState("");
  const [gender, setGender] = useState("");
  const [address, setAddress] = useState("");
  const [status, setStatus] = useState("");
  const [photo, setPhoto] = useState("");

  //   const [formStudent, setFormStudent] = useState({
  //     fullname: "",
  //     gender: "",
  //     address: "",
  //     status: "",
  //   });

  const submitHandler = (event) => {
    event.preventDefault(); // untuk mencegah refresh sendiri ygy
    const formStudent = {
      fullname,
      gender,
      address,
      status,
      photo,
    };
    Swal.fire("Student Profile", `Hello, my name is ${fullname}, i'm ${gender}. My address is in ${address}, my status is ${status}`, "info");
    console.log(formStudent);
  };

  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col-md-3"></div>
          <div className="col-md-6">
            <div className="text-center">
              <h3>Form Mahasiswa</h3>
              <small>Welcome freshment students</small>
            </div>
            <hr />
            <form action="" method="">
              <div className="mb-3">
                <label className="form-label">Full name</label>
                <input onChange={(e) => setFullname(e.target.value)} className="form-control" placeholder="Masukkan nama lengkap." />
                <div className="form-text">Masukkan nama lengkap sesuai KTP, thank you.</div>
              </div>
              <div className="mb-3">
                <label className="form-label">Jenis kelamin</label>
                <div class="form-check">
                  <input onChange={(e) => setGender(e.target.value)} class="form-check-input" type="radio" name="gender" id="gender1" value="pria" />
                  <label class="form-check-label" for="gender1">
                    Pria
                  </label>
                </div>
                <div class="form-check">
                  <input onChange={(e) => setGender(e.target.value)} class="form-check-input" type="radio" name="gender" id="gender2" value="wanita" />
                  <label class="form-check-label" for="gender2">
                    Wanita
                  </label>
                </div>
              </div>
              <div className="mb-3">
                <label className="form-label">Alamat</label>
                <textarea onChange={(e) => setAddress(e.target.value)} className="form-control" rows="3" placeholder="Masukkan alamat"></textarea>
              </div>
              <div className="mb-3">
                <label className="form-label">Status beasiswa</label>
                <select onChange={(e) => setStatus(e.target.value)} class="form-select form-select-sm">
                  <option selected>Pilih status</option>
                  <option value="beasiswa">Beasiswa</option>
                  <option value="non_beasiswa">Non Beasiswa</option>
                  <option value="orang_dalem">Orang Dalem</option>
                </select>
              </div>
              <div className="mb-3">
                <label className="form-label">Upload file</label>
                <div class="input-group mb-3">
                  <input onChange={(e) => setPhoto(e.target.value)} type="file" class="form-control" id="inputGroupFile02" />
                  <label class="input-group-text" for="inputGroupFile02">
                    Upload
                  </label>
                </div>
              </div>
              <div className="mb-3">
                <div className="d-grid gap-2">
                  <button onClick={submitHandler} className="btn btn-block btn-primary">
                    Submit Student
                  </button>
                </div>
              </div>
            </form>
          </div>
          <div className="col-md-3"></div>
        </div>
      </div>
    </>
  );
};

export default FormSection;
