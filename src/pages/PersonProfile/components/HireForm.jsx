import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function HireForm({ person, hirePeople, firePeople }) {
  const [wage, setWage] = useState(person.wage || 0);
  const [newWage, setNewWage] = useState(person.wage || 0);
  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();
    person.wage = wage;
    person.hired = true;
    hirePeople(person);
    navigate('/');
  };

  const handleEdit = () => {
    // Update the person's wage with the new wage value
    person.wage = newWage;
    hirePeople(person);
    navigate('/'); // Navigate back to Dashboard
  };

  const handleFire = () => {
    person.hired = false;
    firePeople(person);
    navigate('/');
  };

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="wage">{person.hired ? 'New Wage Offer' : 'Wage Offer'}</label>
      <input
        type="text"
        id="wage"
        name="wage"
        onChange={(e) => person.hired ? setNewWage(e.target.value) : setWage(e.target.value)}
        value={person.hired ? newWage : wage}
      />
      <button type="submit">{!person.hired ? 'Hire' : 'Edit'}</button>
      {person.hired && <button onClick={handleFire}>Fire</button>}
      {person.hired && <button type="button" onClick={handleEdit}>Save</button>}
    </form>
  );
}

export default HireForm;
