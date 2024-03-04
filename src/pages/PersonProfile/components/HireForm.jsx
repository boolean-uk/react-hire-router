import { useState } from "react";
import { useNavigate } from "react-router-dom";

function HireForm(props) {
  const [wage, setWage] = useState("0");
  const navigate = useNavigate();
  const { person, setHiredPeople, hiredPeople, setPerson } = props;

  const handleSubmit = (event) => {
    event.preventDefault();
    let alreadyHired = false
    for(const hiredPerson of hiredPeople) {
      if(hiredPerson.index === person.index) {
        alreadyHired = true;
        break;
      }
    }
    if (!alreadyHired) {
      const updatedPerson = { ...person, wage: wage };
      setHiredPeople([...hiredPeople, updatedPerson]);
      setPerson(updatedPerson)
    }
    navigate("/dashboard");
  };

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
