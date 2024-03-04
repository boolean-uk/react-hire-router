import { useState } from "react";

function HireForm(props) {
  const [wage, setWage] = useState(0);
  const { setHiredPeople, profilePerson, hiredPeople, setPeople } = props;

  function handleSubmit(event) {
    event.preventDefault();
    //Check if wage is set
    if (wage !== 0) {
      //Dont add if it already exists
      if (!hiredPeople.includes(profilePerson)) {
        profilePerson.wage = wage;
        setHiredPeople([...hiredPeople, profilePerson]);
      }
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
