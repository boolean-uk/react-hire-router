import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';

function ProfileView() {
  const { id } = useParams();
  const [person, setPerson] = useState(null);

  useEffect(() => {
    fetch(`https://randomuser.me/api/?uuid=${id}`)
      .then(response => response.json())
      .then(data => setPerson(data.results[0]))
      .catch(error => console.error('Error fetching person:', error));
  }, [id]);

  if (!person) return <div>Loading...</div>;

  return (
    <div>
      <h1>{person.name.first} {person.name.last}</h1>
      <img src={person.picture.large} alt={`${person.name.first} ${person.name.last}`} />
      <p>{person.email}</p>
      <Link to={`/edit/${person.login.uuid}`}>Edit</Link>
      <Link to="/">Back to Dashboard</Link>
    </div>
  );
}

export default ProfileView;
