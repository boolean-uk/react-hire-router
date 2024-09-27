import { useEffect, useState } from 'react'
import './App.css'
import { Link, Route, Routes } from 'react-router-dom';
import Dashboard from './pages/Dashboard/index.jsx'
import PersonProfile from './pages/PersonProfile/index.jsx'

export default function App() {
  const [hiredPeople, setHiredPeople] = useState([])
  const [people, setPeople] = useState([]);

    useEffect(() => {
      fetch("https://randomuser.me/api/?results=50")
        .then((response) => response.json())
        .then((data) => {
          setPeople(data.results);
        });
    }, []);

  const handleHire = (personToHire) => {
    if (
      !hiredPeople.some((person) => person.login.uuid === personToHire.login.uuid)
    ) {
      const newHiredPerson = { ...personToHire };
      setHiredPeople((prevHiredPeople) => [...prevHiredPeople, newHiredPerson]);
    }
  };


  const onPersonUpdate = (uuid, updatedPersonInfo) => {
    // Update in hiredPeople list:
    setHiredPeople((prevHired) =>
      prevHired.map((person) =>
        person.login.uuid === uuid ? { ...person, ...updatedPersonInfo } : person
      )
    );

    // Update people list:
    setPeople((prevPeople) =>
      prevPeople.map((person) =>
        person.login.uuid === uuid ? { ...person, ...updatedPersonInfo } : person
      )
    );
  };


  return (
    <>
      <header>
        <h1>Hire Your Team</h1>
        <nav>
          <ul>
            <li>
              <Link to="/">Dashboard</Link>
            </li>
          </ul>
        </nav>
      </header>
      <Routes>
        <Route
          path="/"
          element={
            <Dashboard
              people={people}
              onHire={handleHire}
              hiredPeople={hiredPeople}
              setHiredPeople={setHiredPeople}
            />
          }
        />
        <Route
          path="/view/:id"
          element={
            <PersonProfile
              people={people}
              hiredPeople={hiredPeople}
              onHire={handleHire} 
              onPersonUpdate={onPersonUpdate}
            />
          }
        />
      </Routes>
    </>
  );
}
