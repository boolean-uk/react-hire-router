/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";

function HireForm(props) {
  const [wage, setWage] = useState(0);
  const { person, addToHiredPeople, index } = props;

  const navigate = useNavigate();

  const location = useLocation();

  function handleSubmit(event) {
    event.preventDefault();
    let hiredPerson = { ...person, wage: wage, index: index };
    addToHiredPeople(hiredPerson);
    navigate("/");
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
