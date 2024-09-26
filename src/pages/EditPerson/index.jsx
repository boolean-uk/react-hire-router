import PropTypes from "prop-types";
import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";

function EditPerson({ hiredPeople, setHiredPeople }) {
  const [person, setPerson] = useState(null);
  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    const personToEdit = hiredPeople.find((p) => p.login.uuid === id);
    setPerson(personToEdit);
  }, [id, hiredPeople]);

  const handleEdit = (event) => {
    event.preventDefault();
    const updatedPerson = {
      ...person,
      name: {
        first: event.target.firstName.value,
        last: event.target.lastName.value,
      },
    };
    setHiredPeople(
      hiredPeople.map((p) => (p.login.uuid === id ? updatedPerson : p))
    );
    navigate("/");
  };

  if (!person) return <p>Loading...</p>;

  return (
    <form onSubmit={handleEdit}>
      <label>
        First Name:
        <input type="text" name="firstName" defaultValue={person.name.first} />
      </label>
      <label>
        Last Name:
        <input type="text" name="lastName" defaultValue={person.name.last} />
      </label>
      <button type="submit">Save</button>
    </form>
  );
}

EditPerson.propTypes = {
  hiredPeople: PropTypes.arrayOf(
    PropTypes.shape({
      login: PropTypes.shape({
        uuid: PropTypes.string.isRequired,
      }).isRequired,
      name: PropTypes.shape({
        first: PropTypes.string.isRequired,
        last: PropTypes.string.isRequired,
      }).isRequired,
    })
  ).isRequired,
  setHiredPeople: PropTypes.func.isRequired,
};

export default EditPerson;
