import { useState } from "react";
import { useNavigate } from "react-router-dom";

function HireForm(props) {
  const Navigate = useNavigate();
  const { person, hiredPeople, setHiredPeople } = props;

  const [wage, setWage] = useState(person.wage ? person.wage : 0);

  function handleSubmit(event) {
    event.preventDefault();
    person.wage = wage;
    if (hiredPeople.includes(person)) {
      setHiredPeople([...hiredPeople]);
    } else {
      setHiredPeople([...hiredPeople, person]);
    }
    Navigate("/");
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
