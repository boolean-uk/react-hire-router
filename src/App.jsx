import { useState, useEffect } from 'react';
import './App.css';
import Dashboard from './pages/Dashboard';
import { Route, Routes, Link } from 'react-router-dom'; // Import Link from 'react-router-dom'
import PersonProfile from './pages/PersonProfile';

export default function App() {
  const [hiredPeople, setHiredPeople] = useState([]);

  const [people, setPeople] = useState([]);
  useEffect(() => {
    console.log("Fetching users...")
    for (let i = 0; i < 50; i++) {
      fetch("https://randomuser.me/api", {})
        .then((response) => response.json())
        .then((jsonData) => {
          if (jsonData.results[0].id.value === null) return;
          setPeople((prevPeople) => [...prevPeople, jsonData.results[0]]);
        })
        .catch((error) => {
          console.error('Error fetching people:', error);
        });
    }
  }, []);

  const hirePerson = (p) => {
    if (hiredPeople.includes(p)) return;
    setHiredPeople((prevHiredPeople) => [...prevHiredPeople, p]);
  };

  const firePerson = (p) => {
    if (!hiredPeople.includes(p)) return;
    setHiredPeople((prevHiredPeople) => prevHiredPeople.filter((person) => person !== p));
  };

  return (
    <>
      <header>
        <h1>Hire Your Team</h1>
        <nav>
          <ul>
            <li><Link to="/">Dashboard</Link></li>
            <li><Link to="/people/id">People</Link></li>
          </ul>
        </nav>
      </header>
      <Routes>
        <Route path="/" 
          element={
          <Dashboard hiredPeople={hiredPeople} people={people}/>} />
        <Route path="/people/:id" 
          element={
          <PersonProfile people={people} hirePeople={hirePerson} firePerson={firePerson} />} />
      </Routes>
    </>
  );
}
