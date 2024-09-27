import { useEffect, useState } from "react";
import HireForm from "./components/HireForm";
import { useNavigate, useParams } from "react-router-dom";

function PersonProfile(props) {
  const [editMode, setEditMode] = useState(false);
  const { id } = useParams();
  const navigate = useNavigate();
  const { people, onPersonUpdate, hiredPeople, onHire } = props

  const person = people.find((p) => p.login.uuid === id);
  const isHired = hiredPeople.some((p) => p.login.uuid === id);

  if (!person) return <div>Loading profile...</div>;

  const handleHireClick = () => {
    if (!isHired) {
      onHire(person);
    }
  };

  return (
    <article>
      {!editMode ? (
        <>
          <h2>
            Name: {person.name.first} {person.name.last}
          </h2>
          <img
            src={person.picture.large}
            alt={`${person.name.first} ${person.name.last}`}
          />
          <p>Email: {person.email}</p>
          <p>Phone: {person.phone}</p>
          <p>
            Location:{" "}
            {`${person.location.city}, ${person.location.state}, ${person.location.country}`}
          </p>
          <p>Wage: £{person.wage || "0"}</p>
          <button onClick={() => setEditMode(true)}>Edit Wage</button>
          <button onClick={handleHireClick} disabled={isHired}>
            Hire
          </button>
        </>
      ) : (
        <HireForm person={person} onPersonUpdate={onPersonUpdate} />
      )}
    </article>
  );
}

export default PersonProfile;
