import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { getStudentById } from "../../fetchs/fetchStudent";

const StudentDetail = () => {
  const [student, setStudent] = useState({});
  const params = useParams();

  useEffect(() => {
    getStudentById(params.id, (data) => {
      setStudent(data);
    });
  }, []);

  return (
    <div className="card">
      <div className="row">
        <div className="col-md-3">
          <img className="img-fluid rounded" src={student.avatar} alt="apatar" />
        </div>
        <div className="col-md-9">
          <h3>{student.name}</h3>
          <p>{student.age} years old</p>
          <small className="badge bg-info">{student.major}</small>
        </div>
      </div>
    </div>
  );
};

export default StudentDetail;
