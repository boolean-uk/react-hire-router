import { useState, useEffect } from 'react'
import './App.css'
import Dashboard from './pages/Dashboard';

import {
  Route,
  Routes,
  Link
} from "react-router-dom";
import PersonProfile from './pages/PersonProfile';

export default function App() {
  const [hiredPeople, setHiredPeople] = useState([])
  const [people, setPeople] = useState([])

  useEffect(() => {
    const createPeople = async () => {
      await fetch("https://randomuser.me/api/?results=50").then(res => res.json())
        .then(res => res.results).then(setPeople);
    };

    createPeople();
  }, [])

  return (
    <>
      <header>
        <h1>Hire Your Team</h1>
        <nav>
          <Link to="/">Home</Link>
        </nav>
      </header>
      <Routes>
        <Route path = "/" 
          element={<Dashboard hiredPeople={hiredPeople} 
          people={people}/>}/>
        <Route path = "/view/:id" element={<PersonProfile people={people}
        setHiredPeople={setHiredPeople} hiredPeople={hiredPeople}/>} />
      </Routes>
    </>
  )
}
