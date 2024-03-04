import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

function EditForm(props) {
  const { person, setPerson, hiredPeople, setHiredPeople, people } = props;
  const [wage, setWage] = useState(0);
  const [tempFirstName, setTempFirstName] = useState("");
  const [tempLastName, setTempLastName] = useState("");
  const { id } = useParams();

  useEffect(() => {
    if ((!people, id)) {
      const matchingPerson = hiredPeople.find((p) => p.id.name === id);
      setPerson(matchingPerson);
      setTempFirstName(person.name.first);
      setTempLastName(person.name.last);
    }
  }, [people, id]);

  function handleSubmit(event) {
    event.preventDefault();

    person.wage = wage;
    if (wage !== 0 && tempFirstName !== "" && tempLastName !== "") {
      const index = hiredPeople.indexOf((p) => p.id.name === id);
      const tempArray = [...hiredPeople];
      const tempPerson = { ...tempArray[index] };
      console.log(tempPerson);
      tempPerson.wage = wage;
      tempPerson.name.first = tempFirstName;
      tempPerson.name.last = tempLastName;
      tempArray[index] = tempPerson;
      setHiredPeople(tempArray);
    }
  }
  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="wage">Edit Wage</label>
      <input
        type="text"
        id="wage"
        name="wage"
        onChange={(e) => setWage(e.target.value)}
        value={wage}
      />
      <label htmlFor="firstName">Edit First Name</label>
      <input
        type="text"
        id="Firstame"
        name="firstName"
        onChange={(e) => setTempFirstName(e.target.value)}
        value={tempFirstName}
      />
      <label htmlFor="lastName">Edit Last Name</label>
      <input
        type="text"
        id="lastName"
        name="lastName"
        onChange={(e) => setTempLastName(e.target.value)}
        value={tempLastName}
      />
      <button type="submit">Edit</button>
    </form>
  );
}

export default EditForm;
