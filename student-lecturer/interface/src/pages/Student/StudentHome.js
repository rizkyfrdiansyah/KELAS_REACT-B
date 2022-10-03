import React, { useState, useEffect } from "react";

import { Link, useLocation } from "react-router-dom";

import { getStudents, deleteStudent } from "../../fetchs/fetchStudent";

const StudentHome = () => {
  const [students, setStudents] = useState([]);
  const locate = useLocation();

  const deleteHandler = async (id) => {
    deleteStudent(id, (result) => {
      setStudents(result);
    });
  };

  useEffect(() => {
    getStudents((data) => {
      setStudents(data);
    });
  }, []);

  return (
    <>
      <div className="row">
        <div className="col-md-6 float-start">
          <h3>Student Page</h3>
        </div>
        <div className="col-md-6 float-end">
          <Link className="btn btn-sm btn-primary float-end" to="/students/create">
            + Add Student
          </Link>
        </div>
      </div>
      <div>
        <table className="table table-bordered">
          <thead>
            <tr>
              <th>ID</th>
              <th>Students</th>
              <th>Major</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {students.length !== 0 ? (
              students.map((student) => {
                const { id, name, age, avatar, major } = student;
                return (
                  <tr>
                    <td>{id}</td>
                    <td>
                      <div className="card">
                        <div className="row">
                          <div className="col-md-3">
                            <img className="img-fluid rounded" src={avatar} alt="apatar" />
                          </div>
                          <div className="col-md-9">
                            <h3>{name}</h3>
                            <small className="badge bg-primary">{age} years old</small>
                            <button onClick={() => deleteHandler(id)} className="btn btn-sm btn-danger">
                              Delete
                            </button>
                          </div>
                        </div>
                      </div>
                    </td>
                    <td>{major}</td>
                    <td>
                      <Link to={`${locate.pathname}/detail/${id}`} className="btn btn-sm btn-info me-2">
                        More info
                      </Link>
                      <Link to={`${locate.pathname}/update/${id}`} className="btn btn-sm btn-warning">
                        Edit Student
                      </Link>
                    </td>
                  </tr>
                );
              })
            ) : (
              <>
                <p>Student's data are empty.</p>
              </>
            )}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default StudentHome;
