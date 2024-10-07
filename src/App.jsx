import { useState, useEffect } from 'react';
import { Routes, Route, Link } from 'react-router-dom';  
import './App.css';
import Dashboard from './pages/Dashboard';
import PersonProfile from './pages/PersonProfile';

export default function App() {
  const [people, setPeople] = useState([]);
  const [hiredPeople, setHiredPeople] = useState([]);

  useEffect(() => {
    fetch('https://randomuser.me/api/?results=50')
      .then((res) => res.json())
      .then((data) => setPeople(data.results))
      .catch((error) => console.error("Error fetching data:", error));
  }, []);

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
        <Route
          path="/"
          element={<Dashboard people={people} hiredPeople={hiredPeople} />}
        />
        <Route
          path="/view/:uuid"
          element={<PersonProfile people={people} setHiredPeople={setHiredPeople} hiredPeople={hiredPeople} />}
        />
      </Routes>
    </>
  );
}


