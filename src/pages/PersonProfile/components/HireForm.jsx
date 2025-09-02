/* eslint-disable react/prop-types */
import { useState } from "react";
import { useNavigate } from "react-router";

function HireForm({ person, handleAddPeople }) {
  const [wage, setWage] = useState(0);
  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();
    person["wage"] = wage;
    handleAddPeople(person);
    navigate("/");
  };

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="wage">Wage Offer</label>
      <input
        type="number"
        min={1}
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
