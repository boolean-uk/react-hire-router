import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import PropTypes from 'prop-types';
import HireForm from './components/HireForm';

function PersonProfile({ people, hirePeople, firePeople }) {
  const { id } = useParams();
  const person = people.find((p) => p.id.value === id);
  const [wage, setWage] = useState(person ? person.wage || 0 : 0);
  const [newWage, setNewWage] = useState(person ? person.wage || 0 : 0); // State for new wage value
  const [editing, setEditing] = useState(false); // State to track editing mode
  const [viewingProfile, setViewingProfile] = useState(true); // State to track viewing profile mode
  const navigate = useNavigate();

  useEffect(() => {
    if (person && person.hired) {
      setWage(person.wage || 0);
      setNewWage(person.wage || 0); // Initialize new wage with current wage value
    }
  }, [person]);

  if (!person) return <p>Loading...</p>;

  const { name, gender } = person;
  const { title } = name;

  const handleHire = () => {
    person.hired = true;
    person.wage = wage;
    hirePeople(person);
    navigate('/');
  };

  const handleFire = () => {
    person.hired = false;
    firePeople(person);
    navigate('/');
  };

  const handleWageChange = (e) => {
    // Update new wage when editing
    setNewWage(e.target.value);
  };

  const handleEdit = () => {
    setEditing(true); // Enable editing mode
    setViewingProfile(false); // Disable viewing profile mode
  };

  const handleSave = () => {
    person.wage = newWage;
    hirePeople(person);
    setEditing(false); // Disable editing mode after saving
    setViewingProfile(true); // Enable viewing profile mode after saving
  };

  return (
    <article>
      <h2>
        {name.first} {name.last}
      </h2>
      {viewingProfile && ( // Render title and gender only when viewing profile
        <>
          <p>Title: {title}</p>
          <p>Gender: {gender}</p>
          {person.hired && ( // Render Edit button only when person is hired
            <button onClick={handleEdit}>Edit</button>
          )}
        </>
      )}
      {editing && ( // Render New Wage Offer section only when editing
        <div>
          <label htmlFor="wage">New Wage Offer</label>
          <input
            type="text"
            id="wage"
            name="wage"
            value={newWage}
            onChange={handleWageChange}
          />
          <button onClick={handleSave}>Save</button>
        </div>
      )}
      {/* Render hire form and fire button if not in editing mode */}
      {!editing && viewingProfile && !person.hired && (
        <HireForm
          person={person}
          wage={wage}
          hirePeople={hirePeople}
          firePeople={firePeople}
          navigate={navigate}
        />
      )}
      {/* Render fire button if person is hired and not in editing mode */}
      {person.hired && !editing && viewingProfile && (
        <button onClick={handleFire}>Fire</button>
      )}
    </article>
  );
}

PersonProfile.propTypes = {
  people: PropTypes.array.isRequired,
  hirePeople: PropTypes.func.isRequired,
  firePeople: PropTypes.func.isRequired,
};

export default PersonProfile;
