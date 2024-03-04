import { useState, useEffect } from "react";
import PropTypes from "prop-types";
import { useNavigate, useParams } from "react-router-dom";

function EditForm(props) {
  const [wage, setWage] = useState("");
  const { hiredPeople, setHiredPeople } = props;
  const { id } = useParams();
  const [person, setPerson] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    if (hiredPeople && id) {
      setPerson(hiredPeople.find((person) => person.id.value === id));
    }
  }, [hiredPeople, id]);

  if (!person) return <p>No profile with this ID.</p>;

  function handleSubmit(event) {
    event.preventDefault();

    const personIndex = hiredPeople.findIndex((p) => p.id === person.id);

    const updatedHiredPeople = hiredPeople.map((pers, index) => {
      if (index === personIndex) {
        return { ...pers, wage: wage };
      }
      return pers;
    });

    setHiredPeople(updatedHiredPeople);
    navigate("/");
  }

  return (
    <div>
      <h2>
        {person.name.first} {person.name.last}
      </h2>
      <form onSubmit={handleSubmit}>
        <p>Current wage: {person.wage}</p>
        <label htmlFor="wage">New wage: </label>
        <input
          type="text"
          id="wage"
          name="wage"
          onChange={(e) => setWage(e.target.value)}
          value={wage}
        />
        <button type="submit">Update</button>
      </form>
    </div>
  );
}

EditForm.propTypes = {
  hiredPeople: PropTypes.array,
  people: PropTypes.array,
  setHiredPeople: PropTypes.array,
};

export default EditForm;
