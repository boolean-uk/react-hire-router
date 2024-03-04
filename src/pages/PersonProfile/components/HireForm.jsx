import React, { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

function HireForm({ person, setHiredPeople, hiredPeople, setIsHired }) {
  const [wage, setWage] = useState(0);

  const navigate = useNavigate();
  const { index } = useParams();

  function handleSubmit(event) {
    event.preventDefault();

    // Create a new object with the updated wage
    const updatedPerson = { ...person, wage: wage, index: index };

    // Check if the person already exists in hiredPeople
    const personIndex = hiredPeople.findIndex((p) => p.index === index);
    if (personIndex !== -1) {
      // If the person exists, update their wage
      const updatedHiredPeople = [...hiredPeople];
      updatedHiredPeople[personIndex] = updatedPerson;
      setHiredPeople(updatedHiredPeople);
    } else {
      // If the person doesn't exist, add them to hiredPeople
      setHiredPeople([...hiredPeople, updatedPerson]);
    }

    setIsHired(true);
    navigate("/Dashboard");
  }

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="wage">Wage Offer</label>
      <input
        type="text"
        id="wage"
        name="wage"
        onChange={(e) => setWage(e.target.value)}
        value={wage}
      />
      <button type="submit">Hire</button>
    </form>
  );
}

export default HireForm;
