// import { useState } from 'react'
import './App.css'
import Dashboard from './pages/Dashboard'
import PersonProfile from './pages/PersonProfile'
import { Routes, Route } from "react-router-dom";
import { useEffect, useState } from 'react'


export default function App() {
  const [hiredPeople, setHiredPeople] = useState([])

  const url = "https://randomuser.me/api/?results=50";

  const [people, setPeople] = useState([])

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(url);
      const jsonData = await response.json();
      setPeople(jsonData.results);
    };
    fetchData();
  }, [url]);

  return (
    <>
      <header>
        <h1>Hire Your Team</h1>
        <nav>
          <ul>
            <li>
              <Routes>
                <Route path="/" element={<Dashboard people={people} hiredPeople={hiredPeople} setHiredPeople={setHiredPeople}/>}/>
                <Route path="/view/:id" element={<PersonProfile people={people} hiredPeople={hiredPeople} setHiredPeople={setHiredPeople}/>}/>              
              </Routes>
              
              </li>
          </ul>
        </nav>
      </header>
    </>
  )
}
