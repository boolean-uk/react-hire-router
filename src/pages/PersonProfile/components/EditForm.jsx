import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";

function EditForm({ hiredPeople, setHiredPeople, wage, setWage }) {
  const [editPerson, setEditPerson] = useState(null);
  const navigate = useNavigate();
  const params = useParams();

  useEffect(() => {
    const selectedPerson = hiredPeople.find(
      (person) => person.id.value === params.id
    );
    setEditPerson(selectedPerson);
  }, [hiredPeople, params.id]);

  if (!editPerson) return <p>Loading...</p>;

  function handleSubmit(event) {
    event.preventDefault();
    const updatedHiredPeople = hiredPeople.map((person) => {
      if (person.id.value === params.id) {
        return { ...person, wage: wage };
      }
      return person;
    });
    setHiredPeople(updatedHiredPeople);
    navigate("/dashboard");
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
