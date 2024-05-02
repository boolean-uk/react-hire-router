import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

function EditForm(props) {
  const navigate = useNavigate();
  const [wage, setWage] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");

  const { person, setHiredPeople, hiredPeople, setPerson } = props;

  useEffect(() => {
    if (person) {
      setFirstName(person.name.first);
      setLastName(person.name.last);
      setWage(person.wage);

    }
  }, [person]);

  const handleSubmit = (event) => {
    event.preventDefault();

    const updatedWage = wage? wage: person.wage;
    const updatedFirstName = firstName ? firstName : person.name.first;
    const updatedLastName = lastName ? lastName : person.name.last;

    const updatedPerson = {
      ...person,
      wage: updatedWage,
      name: { ...person.name, first: updatedFirstName, last: updatedLastName },
    };
    const updatedHiredPeople = hiredPeople.map((hiredPerson) => 
      hiredPerson.index === person.index ? updatedPerson : hiredPerson
    );

    setHiredPeople(updatedHiredPeople);
    setPerson(updatedPerson);
    

    navigate("/dashboard");
  };

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="first-name">First name </label>
      <input
        type="text"
        id="first-name"
        name="first-name"
        onChange={(e) => setFirstName(e.target.value)}
        value={firstName}
      />
      <label htmlFor="last-name"> Last name </label>
      <input
        type="text"
        id="last-name"
        name="last-name"
        onChange={(e) => setLastName(e.target.value)}
        value={lastName}
      />
      <label htmlFor="wage"> Wage </label>
      <input
        type="text"
        id="wage"
        name="wage"
        onChange={(e) => setWage(e.target.value)}
        value={wage}
      />
      <button type="submit">Save</button>
    </form>
  );
}

export default EditForm;
