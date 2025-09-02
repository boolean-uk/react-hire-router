import { useState, useEffect } from 'react'
import { NavLink, Route, Routes } from 'react-router-dom';
import './App.css'
import Dashboard from './pages/Dashboard';
import PersonProfile from './pages/PersonProfile';

export default function App() {

  const [hiredPeople, setHiredPeople] = useState([])
  const [people, setPeople] = useState([])
  const url = "https://randomuser.me/api/?results=50"

  useEffect(() => {

    const fetchData = async () => {
    const response = await fetch(url);
    const jsonData = await response.json();
    setPeople(jsonData.results);
  };

  fetchData();
  }, []);

  const hirePerson = (person, wage) => {
    setHiredPeople([...hiredPeople, { ...person, wage }]);
  };

  return (
    <>
      <header>
        <h1>Hire Your Team</h1>
        <nav>
          <ul>
            <NavLink to="/">
              <li>Dashboard</li>
            </NavLink>
          </ul>
        </nav>
      </header>
      <Routes>
        <Route path="/" element={<Dashboard hiredPeople={hiredPeople}     people={people}/>}/>

        <Route path="/view/:id" element={<PersonProfile hiredPeople=  {hiredPeople} people={people} hirePerson={hirePerson}/>}/>
      </Routes>
    </>
  )
}
