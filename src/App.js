import { Routes, Route, Link } from 'react-router-dom'
import React, {useState} from 'react'
import EditProfileView from './views/EditProfileView'
import ProfileView from './views/ProfileView'
import Dashboard from './views/Dashboard'
import './styles.css'

export default function App() { 
  const [people, setPeople] = useState([]);
  const [hired, setHired] = useState([]);

  // if this function isn't added, the same user in the same index can be added again 
  // if it is added, a user with the index of a previous user added can't be added 
  const hirePerson = (person) => {
    if (!hired.some((hiredPerson) => hiredPerson.id === person.id)) {
      setHired([...hired, person]);
    }
  };

  const updatePersonData = (updatedPerson) => {
    const updatedPersonIndex = hired.findIndex((person) => person.id === updatedPerson.id);
    
    if (updatedPersonIndex !== -1) {
      const updatedHired = [...hired];
      updatedHired[updatedPersonIndex] = updatedPerson;
      setHired(updatedHired);
    }
  };

return (
  <>
    <header>
      <h1>Hire Your Team</h1>
      <nav>
        <ul>
          <li><Link to="/">Dashboard</Link></li>
        </ul>
      </nav>
    </header>
    <Routes>
      <Route exact path="/" element={<Dashboard people={people} setPeople={setPeople} hired={hired} setHired={setHired} hirePerson={hirePerson} updatePersonData={updatePersonData} />} />
      <Route path="/view/:id" element={<ProfileView hirePerson={hirePerson}/>} />
      <Route path="/edit/:id" element={<EditProfileView updatePersonData={updatePersonData}/>} />
    </Routes>
  </>
);
}