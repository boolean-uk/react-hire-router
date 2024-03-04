import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";

function EditForm({ people, setHiredPeople, hiredPeople }) {
  const [wage, setWage] = useState(0);
  const navigate = useNavigate();
   // Get the `id` parameter from the URL path
  const { id } = useParams();
  const [personToUpdate, setPersonToUpdate] = useState(null);


  useEffect(() => {
    // We only update the person state when we have all the necessary data
    if (hiredPeople && id) {
      const person = hiredPeople.find(p => Number(p.id.value) === Number(id));
      setPersonToUpdate(person);
      if (person) {
        setWage(person.wage);
      }
    }
  }, [hiredPeople, id]);

  function handleSubmit(event) {
    event.preventDefault();
    if (!personToUpdate) {
      return;
    }
    // Update the wage of the person in the hiredPeople array
    const updatedHiredPeople = hiredPeople.map(person => {
      if (Number(person.id.value) === Number(id)) {
        return { ...person, wage: wage };
      }
      return person;
    });
    setHiredPeople(updatedHiredPeople);
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
      <button type="submit">Save</button>
    </form>
  );
}

export default EditForm;
