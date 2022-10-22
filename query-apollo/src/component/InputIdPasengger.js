import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function InputIdPasengger() {
  const [id, setId] = useState(0);
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    setId(e.target.value);
    navigate("/search/" + id);
  };

  const handleInput = (e) => {
    setId(e.target.value);
  };

  return (
    <form onSubmit={handleSubmit} className="input-id-user">
      <label>Input ID:</label>
      <input type="number" placeholder="ID" value={id} onChange={handleInput} />
      <input type="submit" value="Search" />
    </form>
  );
}

export default InputIdPasengger;
