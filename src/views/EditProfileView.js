import React, { useState } from 'react'
import { useNavigate, useLocation } from 'react-router-dom'

function EditProfileView({ updatePersonData }) {
  
  const location = useLocation();
  const navigate = useNavigate();
  const [person, setPerson] = useState(location.state);
  
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    const [propertyName, subPropertyName] = name.split('.');
  
    if (subPropertyName) {
      setPerson({
        ...person,
        [propertyName]: {
          ...person[propertyName],
          [subPropertyName]: value,
        },
      });
    } else {
      setPerson({
        ...person,
        [name]: value,
      });
    }
  };
  
  if (!person) {
    return <div>Loading...</div>;
  }

  const saveChanges = () => {
    updatePersonData(person);
    navigate(`/`, { state: person });
  };

  return (
    <div>
      <h2>Edit Profile</h2>
      <form>
        <div>
          <label>First Name:</label>
          <input
            type="text"
            name="name.first"
            value={person.name.first}
            onChange={handleInputChange}
          />
        </div>
        <div>
          <label>Last Name:</label>
          <input
            type="text"
            name="name.last"
            value={person.name.last}
            onChange={handleInputChange}
          />
        </div>
        <div>
          <label>Email:</label>
          <input
            type="text"
            name="email"
            value={person.email}
            onChange={handleInputChange}
          />
        </div>
        <div>
          <label>Wage:</label>
          <input
            type="number"
            name="wage"
            value={person.wage}
            onChange={handleInputChange}
          />
        </div>
      </form>
      <button onClick={saveChanges}>Save Profile</button>
    </div>
  );
}

export default EditProfileView;