/* eslint-disable react/prop-types */
import { useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";

function HireForm(props) {
  const [wage, setWage] = useState(0);
  const navigate = useNavigate()

  const { person, hiredPeople, setHiredPeople } = props;
  const { id } = useParams();

  function handleSubmit(event) {
    event.preventDefault();
    person.wage = wage;

    setHiredPeople([...hiredPeople, person]);
    navigate("/")    
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
