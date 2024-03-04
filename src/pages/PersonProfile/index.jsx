import { useEffect, useState } from 'react'
import HireForm from './components/HireForm'
import { useNavigate, useParams } from 'react-router-dom';

function PersonProfile( props ) {
  const [editMode, setEditMode] = useState(false);
  const { id } = useParams();

  const { onPersonUpdate, hiredPeople } = props

  const person = hiredPeople.find((p) => p.login.uuid === id);

  if (!person) return <div>Loading profile...</div>;

  return (
    <article>
      {!editMode ? (
        <>
          <h2>
            Name: {person.name.first} {person.name.last}
          </h2>
          <img src={person.picture.large}></img>
          <p>Email: {person.email}</p>
          <p>Phone: {person.phone}</p>
          <p>
            Location:{" "}
            {`${person.location.city}, ${person.location.state}, ${person.location.country}`}
          </p>
          <p>Wage: £{person.wage || "Not Set"}</p>
          <button onClick={() => setEditMode(true)}>Edit Wage</button>
        </>
      ) : (
        <HireForm person={person} onPersonUpdate={onPersonUpdate} />
      )}
    </article>
  );
}

export default PersonProfile
