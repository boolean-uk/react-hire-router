import React, { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

function HireForm({ setHiredPeople, hiredPeople }) {
  const [wage, setWage] = useState(0);
  const navigate = useNavigate();
  const { id } = useParams();

  const handleSubmit = (event) => {
    event.preventDefault();

    const personIndex = hiredPeople.findIndex((person) => person.login.uuid === id);
    const updatedPerson = {
      ...hiredPeople[personIndex],
      wage: wage,
    };

    const updatedHiredPeople = [...hiredPeople];
    updatedHiredPeople[personIndex] = updatedPerson;
    setHiredPeople(updatedHiredPeople);

    navigate("/Dashboard");
  };

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="wage">Wage:</label>
      <input
        type="number"
        id="wage"
        name="wage"
        value={wage}
        onChange={(e) => setWage(e.target.value)}
      />
      <button type="submit">Hire</button>
    </form>
  );
}

export default HireForm;
