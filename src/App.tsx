import { useEffect, useState } from 'react'
import './App.css'
import React from 'react'
import { Link, Route, Routes } from 'react-router-dom'
import PersonProfile from './pages/PersonProfile'
import { resolveBaseUrl } from 'vite'
import Dashboard from './pages/Dashboard'

export default function App() {
  const [hiredPeople, setHiredPeople] = useState([])
  const [people, setPeople] = useState([]);

  const fetchPersons = async () => {

    const fetchedpeople= [];
    const response = await fetch("https://randomuser.me/api/" + "/?results=50");
    const jsonData = await response.json();
    let personslist = jsonData.results.map((person) => {return person}); 
    setPeople(personslist);

  }

  useEffect(()=>{
    fetchPersons();
    
  },[]);

  return (
    <>
      <header>
        <h2>Hire Your Team</h2>
        <nav>
          <ul>
            <li>
              <Link to="/">Dashboard</Link>
              </li>
          </ul>
        </nav>
      </header>
      <div>
      <div className="container">
      <Routes>
        <Route path="/" element={<Dashboard people={people} hiredPeople={hiredPeople}></Dashboard>}></Route>
        <Route path="/profile/:id" element={< PersonProfile people={people} hiredPeople={hiredPeople} setHiredPeople={setHiredPeople}></PersonProfile>}></Route>
      </Routes>
      </div>
      </div>
    </>
  )
}
