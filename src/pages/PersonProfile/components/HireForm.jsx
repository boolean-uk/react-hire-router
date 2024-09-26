import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

function HireForm(props) {
  const { person, setPerson, people, setPeople, hiredPeople, setHiredPeople } =
    props;
  const [wage, setWage] = useState(0);
  const { id } = useParams();

  useEffect(() => {
    if ((!people, id)) {
      const matchingPerson = people.find((p) => p.id.name === id);
      setPerson(matchingPerson);
    }
  }, [people, id]);

  function handleSubmit(event) {
    event.preventDefault();

    person.wage = wage;
    if (wage !== 0) {
      if (!hiredPeople.includes(person)) {
        person.wage = wage;
        setHiredPeople([...hiredPeople, person]);
      } else {
        const index = hiredPeople.indexOf((p) => p === person);
        const tempArray = [...hiredPeople];
        const tempPerson = { ...tempArray[index] };
        tempPerson.wage = wage;
        tempArray[index] = tempPerson;
        setHiredPeople(tempArray);
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
