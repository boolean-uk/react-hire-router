import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import PropTypes from "prop-types";

function HireForm({ person, setHiredPeople, hiredPeople, people, setPeople }) {
  const [hiringCost, setHiringCost] = useState(0);
  const navigate = useNavigate();

  useEffect(() => {
    // Set the initial value of hiringCost to person's wage if already hired
    const alreadyHired = hiredPeople.find((p) => p.id === person.id);
    if (alreadyHired) {
      setHiringCost(alreadyHired.wage);
    }
  }, [person.id, hiredPeople]);

  function handleSubmit(event) {
    event.preventDefault();
    const hiredPerson = { ...person, wage: hiringCost };
    console.log(hiredPeople);
    const alreadyHired = hiredPeople.findIndex((p) => p.id === hiredPerson.id);
    if (alreadyHired === -1) {
      setHiredPeople((prevHiredPeople) => [...prevHiredPeople, hiredPerson]);
      setPeople((prevPeople) =>
        prevPeople.filter((person) => person.id !== hiredPerson.id)
      );
      console.log(
        `${person.name.first} added as employee, returning to dashboard`
      );
      navigate("/");
    } else {
      hiredPeople[alreadyHired] = { ...person, wage: hiringCost };
      setHiredPeople([...hiredPeople]);
      navigate("/");
    }
  }

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="wage">Wage Offer</label>
      <input
        type="text"
        id="wage"
        name="wage"
        onChange={(e) => setHiringCost(e.target.value)}
        value={hiringCost}
      />
      <button type="submit">Hire</button>
    </form>
  );
}

export default HireForm;
HireForm.propTypes = {
  hiredPeople: PropTypes.arrayOf(PropTypes.object),
};
