import { useState } from "react";
import { Link } from "react-router-dom";

function HireForm({ person, hiredPeople, setHiredPeople }) {
  const [wage, setWage] = useState(0);
  const getPerson = hiredPeople.find((t) => t.id.value === person.id.value);
  
  function handleSubmit(event) {
    event.preventDefault();

    if (wage === 0) {
      hiredPeople.map((x) => { x.id.value === person.id.value ? hiredPeople.splice(hiredPeople.indexOf(x), 1) : x; });
      setHiredPeople((hiredPeople) => [...hiredPeople]);
    }

    if (getPerson) {
      const updateHiredPerson = hiredPeople.map((p) => {
        return p.id.value === person.id.value ? { ...p, wage: wage } : p;
      });
      setHiredPeople(updateHiredPerson);
    } else {
      setHiredPeople((hiredPeople) => [
        ...hiredPeople,
        { ...person, wage: wage },
      ]);
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
      <button type="submit" onClick={handleSubmit}>
        <Link to="/">{getPerson ? "Edit" : "Hire"}</Link>
      </button>
    </form>
  );
}

export default HireForm;
