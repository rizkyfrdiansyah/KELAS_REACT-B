import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { addStudent } from "../../fetchs/fetchStudent";

const StudentCreate = () => {
  //   const [name, setName] = useState("");
  //   const [age, setAge] = useState(0);
  //   const [avatar, setAvatar] = useState("");
  //   const [major, setMajor] = useState("");

  const [form, setForm] = useState({
    name: "",
    age: 0,
    avatar: "",
    major: "",
  });

  const navigate = useNavigate();

  const submitHandler = (e) => {
    e.preventDefault();
    addStudent(form);
    navigate("/students");
  };

  return (
    <div className="row">
      <div className="col-md-12 m-3 text-center">
        <h3>Create Student</h3>
      </div>
      <div className="mx-auto col-md-6">
        <form onSubmit={submitHandler}>
          <div className="mb-3">
            <label>Name:</label>
            <input
              //   onChange={(e) => setName(e.target.value)}
              onChange={(e) => setForm({ ...form, name: e.target.value })}
              className="form-control"
              type="text"
              placeholder="Input student name"
            ></input>
          </div>
          <div className="mb-3">
            <label>Age:</label>
            <input
              //   onChange={(e) => setAge(+e.target.value)}
              onChange={(e) => setForm({ ...form, age: e.target.value })}
              className="form-control"
              type="number"
              placeholder="Input student age"
            ></input>
          </div>
          <div className="mb-3">
            <label>Avatar:</label>
            <input
              //   onChange={(e) => setAvatar(e.target.value)}
              onChange={(e) => setForm({ ...form, avatar: e.target.value })}
              className="form-control"
              type="text"
              placeholder="Input avatar (optional)"
            ></input>
          </div>
          <div className="mb-3">
            <label>Major:</label>
            <select
              className="form-select"
              //   onChange={(e) => setMajor(e.target.value)}
              onChange={(e) => setForm({ ...form, major: e.target.value })}
            >
              <option selected>- Choose One -</option>
              <option value="teknik_informatika">Teknik Informatika</option>
              <option value="sistem_informasi">Sistem Informasi</option>
            </select>
          </div>
          {/* <div className="mb-3">
            <label>Completed</label>
            <div className="form-check">
              <input
                onChange={(e) =>
                  setForm({ ...form, completed: e.target.value })
                }
                value="true"
                name="completed"
                type="radio"
                className="form-check-input"
              ></input>
              <label className="form-check-label">True</label>
            </div>
            <div className="form-check">
              <input
                onChange={(e) =>
                  setForm({ ...form, completed: e.target.value })
                }
                value="false"
                name="completed"
                type="radio"
                className="form-check-input"
              ></input>
              <label className="form-check-label">False</label>
            </div>
          </div> */}
          <div className="mb-3">
            <input className="btn btn-success" type="submit"></input>
          </div>
        </form>
      </div>
    </div>
  );
};

export default StudentCreate;
