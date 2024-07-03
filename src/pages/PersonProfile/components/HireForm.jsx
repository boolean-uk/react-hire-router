import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';

function EditProfile() {
  const { id } = useParams();
  const [person, setPerson] = useState(null);
  const [updatedPerson, setUpdatedPerson] = useState({});
  const navigate = useNavigate();

  useEffect(() => {
    fetch(`https://randomuser.me/api/?uuid=${id}`)
      .then(response => response.json())
      .then(data => setPerson(data.results[0]));
  }, [id]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUpdatedPerson({ ...updatedPerson, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Update the person's data here.
    navigate('/');
  };

  if (!person) return <div>Loading...</div>;

  return (
    <div>
      <h1>Edit Profile: {person.name.first} {person.name.last}</h1>
      <form onSubmit={handleSubmit}>
        <label>
          First Name:
          <input type="text" name="first" defaultValue={person.name.first} onChange={handleChange} />
        </label>
        <label>
          Last Name:
          <input type="text" name="last" defaultValue={person.name.last} onChange={handleChange} />
        </label>
        <button type="submit">Save</button>
      </form>
    </div>
  );
}

export default EditProfile;
