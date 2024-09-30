import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function HireForm({ person, hiredPeople, setHiredPeople }) {
  const [wage, setWage] = useState(0);
  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();
    navigate("/");
    if (
      hiredPeople.some(
        (hiredPerson) => hiredPerson.login.uuid === person.login.uuid,
      )
    )
      return;

    setHiredPeople([...hiredPeople, { ...person, wage }]);
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
      <button type="submit" onClick={handleSubmit}>
        Hire
      </button>
    </form>
  );
}
