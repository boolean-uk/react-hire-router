import { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";

function HireForm(props) {
  const { person, setHiredPeople } = props;

  const [wage, setWage] = useState(person.wage ? person.wage : 0);
  const locationData = useLocation();
  const editing = locationData.pathname.includes("edit");

  const navigate = useNavigate();

  function handleSubmit(event) {
    event.preventDefault();
    const parsedWage = parseInt(wage);
    if (isNaN(parsedWage)) {
      return;
    }
    person.wage = parseInt(parsedWage);
    navigate("/");
    setHiredPeople((prevHired) => {
      console.log(wage);
      if (prevHired.includes(person)) {
        return [...prevHired];
      } else {
        return [...prevHired, person];
      }
    });
  }

  function handleFirePerson(event) {
    event.preventDefault();
    delete person.wage;
    setHiredPeople((prevHired) => prevHired.filter((h) => h !== person));
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
      <button type="submit">{editing ? "Update Salary" : "Hire"}</button>
      <button onClick={handleFirePerson} type="button">
        Fire Person
      </button>
      <Link to="/"> Back to Dashboard</Link>
    </form>
  );
}

export default HireForm;
