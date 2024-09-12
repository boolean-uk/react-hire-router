import { useState } from 'react'
import { useNavigate } from "react-router-dom";

function HireForm(props) {
  const [wage, setWage] = useState(1)

  const { person, hiredPeople, setHiredPeople } = props;

  const goToDashboard = useNavigate();

  function handleSubmit(event) {
    event.preventDefault()
  }

  const handleHire = () => {
    if (!hiredPeople.includes(person)) {
      setHiredPeople([...hiredPeople, person]);
    }
    person.wage = wage
    goToDashboard("/dashboard");
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
      <button type="submit" onClick={handleHire}>Hire</button>
    </form>
  );
}

export default HireForm
