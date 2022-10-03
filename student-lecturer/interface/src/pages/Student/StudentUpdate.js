import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { updateStudent, getStudentById } from "../../fetchs/fetchStudent";

const StudentUpdate = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [form, setForm] = useState({
    name: "",
    age: 0,
    avatar: "",
    major: "",
  });

  useEffect(() => {
    getStudentById(Number(id), (data) => {
      setForm({
        name: data.name,
        age: data.age,
        avatar: data.avatar,
        major: data.major,
      });
    });
  }, []);

  const submitHandler = (e) => {
    e.preventDefault();
    updateStudent(id, form);
    navigate("/students");
  };

  return (
    <div className="row">
      <div className="col-md-12 m-3 text-center">
        <h3>Update Student</h3>
      </div>
      <div className="mx-auto col-md-6">
        <form onSubmit={submitHandler}>
          <div className="mb-3">
            <label>Name:</label>
            <input value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} className="form-control" type="text" placeholder="Input student name"></input>
          </div>
          <div className="mb-3">
            <label>Age:</label>
            <input value={form.age} onChange={(e) => setForm({ ...form, age: e.target.value })} className="form-control" type="number" placeholder="Input student age"></input>
          </div>
          <div className="mb-3">
            <label>Avatar:</label>
            <input value={form.avatar} onChange={(e) => setForm({ ...form, avatar: e.target.value })} className="form-control" type="text" placeholder="Input avatar (optional)"></input>
          </div>
          <div className="mb-3">
            <label>Major:</label>
            <select className="form-select" value={form.major} onChange={(e) => setForm({ ...form, major: e.target.value })}>
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

export default StudentUpdate;
