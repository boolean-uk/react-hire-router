import { useState, useEffect } from 'react'
import { Routes, Route } from "react-router-dom";

import './App.css'
import Dashboard from './pages/Dashboard';
import PersonProfile from './pages/PersonProfile';

export default function App() {
 const url = "https://randomuser.me/api/?results=50" 
 const [people, setPeople] = useState([])
 const [hiredPeople, setHiredPeople] = useState([])

  
  
  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(url);
      const jsonData = await response.json();
      setPeople(jsonData.results)
    }
    fetchData()
  },[])

  const hirePerson = (person, wage) => {
    setHiredPeople([...hiredPeople, { ...person, wage }]);
  };
  
  return (
    <>
      <header>
        <h1>Hire Your Team</h1>
        <main className="main">
          <Routes>
        <Route path="/" element={<Dashboard people={people} hiredPeople = {hiredPeople} />} />
        <Route path="/view/:id" element={<PersonProfile people={people} hirePerson={hirePerson}/>} />
        </Routes>
        </main>
      </header>
    </>
  )
}
