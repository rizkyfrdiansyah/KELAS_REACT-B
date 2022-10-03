import React from "react";

import { useParams } from "react-router-dom";

const StudentDetail = () => {
  const params = useParams();

  console.log(params);
  return <div>Create Student</div>;
};

export default StudentDetail;
