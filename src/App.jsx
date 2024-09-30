import { useState, useEffect } from 'react'
import './App.css'
import { Routes, Route, Link} from "react-router-dom";
import Dashboard from './pages/Dashboard/'

import PeopleProfile from './pages/PersonProfile';
export default function App() {
  const [hiredPeople, setHiredPeople] = useState([])
  const [people, setPeople] = useState([])

  const fetchPeople = async () => {
    try {
      const response = await fetch('https://randomuser.me/api?results=50');
      const data = await response.json();
        setPeople(data.results);
    } catch (error) {
      console.log(error);
    }
  };

    useEffect(() => {
      fetchPeople()
    },[] );


  return (
    <>
      <header>
        <h1>Hire Your Team</h1>
        <nav>
          <ul>
            <li> <Link to="/dashboard">Dashboard </Link> </li>
          </ul>
        </nav>
      </header>
      <Routes>
        <Route path="/people/:id" element={<PeopleProfile people={people}  setHiredPeople={setHiredPeople}/>} />
        <Route path="/dashboard" element={<Dashboard hiredPeople={hiredPeople} people={people} />} />
      </Routes>
    </>
  )
}
