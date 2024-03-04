import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

function EditForm(props) {
  const navigate = useNavigate();
  const [wage, setWage] = useState("0");
  const { person, setHiredPeople, hiredPeople, setPerson } = props;

  const handleSubmit = (event) => {
    event.preventDefault();

    if (wage === undefined) {
      setWage("0");
    }
    const updatedPerson = { ...person, wage: wage };
    const updatedHiredPeople = hiredPeople.map((hiredPerson) =>
      hiredPerson.index === person.index ? updatedPerson : hiredPerson
    );

    setHiredPeople(updatedHiredPeople);
    setPerson(updatedPerson);

    navigate("/dashboard");
  };

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="wage">Wage </label>
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
