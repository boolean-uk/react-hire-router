import { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';

function EditWage({ hiredPeople, handleUpdateWage }) {
  const { id } = useParams(); 
  const navigate = useNavigate();

  const [newWage, setNewWage] = useState('');

  const person = hiredPeople.find((person) => person.login.uuid === id);

  if (!person) return <p>Loading...</p>;

  const handleSubmit = (event) => {
    event.preventDefault();
    handleUpdateWage(id, newWage); 
  };

  return (
    <div>
      <h2>Edit Wage for {person.name.first} {person.name.last}</h2>
      <form onSubmit={handleSubmit}>
        <label htmlFor="wage">New Wage:</label>
        <input
          type="number"
          id="wage"
          name="wage"
          value={newWage}
          onChange={(e) => setNewWage(e.target.value)}
        />
        <button type="submit">Update Wage</button>
      </form>
    </div>
  );
}

export default EditWage;
