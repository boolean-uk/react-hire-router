import { useState } from "react";
import { useNavigate } from "react-router-dom";

function HireForm(props) {
  const { person } = props;
  const [wage, setWage] = useState(0);
  const navigate = useNavigate();

  function handleSubmit(event) {
    event.preventDefault();
    navigate("/dashboard", { state: person });
    let hiredPeople = sessionStorage.getItem("hiredPeople");
    if (hiredPeople) {
      hiredPeople = JSON.parse(hiredPeople);
      if (hiredPeople.some((h) => h.id.value === person.id.value)) return;
      hiredPeople.push(person);
      sessionStorage.setItem("hiredPeople", JSON.stringify(hiredPeople));
    } else {
      sessionStorage.setItem("hiredPeople", JSON.stringify([person]));
    }
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
