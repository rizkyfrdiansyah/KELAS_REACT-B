import React, { useState } from "react";

import { Link, useLocation } from "react-router-dom";

const StudentHome = () => {
  const [students, setStudents] = useState([
    {
      id: 1,
      name: "Vincent",
      age: 17,
      avatar: "https://via.placeholder.com/100",
      major: "Teknik Informatika",
    },
    {
      id: 2,
      name: "Admin",
      age: 17,
      avatar: "https://via.placeholder.com/100",
      major: "Sistem Informasi",
    },
    {
      id: 3,
      name: "Ncent",
      age: 17,
      avatar: "https://via.placeholder.com/100",
      major: "Teknik Komputer",
    },
  ]);
  const locate = useLocation();

  return (
    <>
      <h3>Student Page</h3>
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
            {students.map((student) => {
              const { id, name, age, avatar, major } = student;
              return (
                <tr>
                  <td>{id}</td>
                  <td>
                    <div className="card w-75">
                      <div className="row">
                        <div className="col-md-3">
                          <img src={avatar} alt="apatar" />
                        </div>
                        <div className="col-md-9">
                          <h3>{name}</h3>
                          <small className="badge bg-primary">{age} years old</small>
                        </div>
                      </div>
                    </div>
                  </td>
                  <td>{major}</td>
                  <td>
                    <Link to={`${locate.pathname}/detail/${id}`} className="btn btn-sm btn-info">
                      More information
                    </Link>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default StudentHome;
