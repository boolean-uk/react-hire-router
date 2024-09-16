// EditPerson.jsx
import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';

function EditPerson({ hiredPeople, editPerson, setHiredPeople }) {
  const [person, setPerson] = useState(null);
  
  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    if (hiredPeople && id) {
      const matchingPerson = hiredPeople[parseInt(id)];
      setPerson(matchingPerson);
    }
  }, [hiredPeople, id]);

  const handleSubmit = (event) => {
    event.preventDefault();
    editPerson(parseInt(id), person);
    console.log(person)
    navigate('/');
  };

  const handleChange = (event) => {
    const inputName = event.target.name;
    const inputValue = event.target.value;
  
    if (inputName === "person.name.first") {
      setPerson({ ...person, name: { ...person.name, first: inputValue } });
    }
    if (inputName === "person.name.last") {
      setPerson({ ...person, name: { ...person.name, last: inputValue } });
    }
    if (inputName === "person.wage") {
      setPerson({ ...person, wage: inputValue });
    }
  };
  

  if (!person) return <p>Loading...</p>;

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="firstName">First Name</label>
      <input
        type="text"
        id="firstName"
        name="person.name.first"
        onChange={handleChange}
        defaultValue={`${person.name.first}`}
        
      />

        <label htmlFor="name">Last Name</label>
      <input
        type="text"
        id="lastName"
        name="person.name.last"
        onChange={handleChange}
        defaultValue={`${person.name.last}`}
        
      />
      <label htmlFor="wage">Wage</label>
      <input
        type="text"
        id="wage"
        name="person.wage"
        value={person.wage}
        onChange={handleChange}
      />
      <button type="submit">Save</button>
    </form>
  );
}

export default EditPerson;
