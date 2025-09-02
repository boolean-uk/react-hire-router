import { useEffect, useState } from 'react'
import { Route, Routes } from "react-router-dom";
import './App.css'
import Navigation from './pages/components/Navigation';
import Welcome from './pages/components/Welcome';
import PersonProfile from './pages/PersonProfile';
import Dashboard from './pages/Dashboard/index';

export default function App() {
  const [hiredPeople, setHiredPeople] = useState([])
  const [people, setPeople] = useState([])
  
  const url = 'http://localhost:3001/results' // 'https://randomuser.me/api/?results=50'

  useEffect(() => {
    let ignore = false;
    const fetchData = async () => {
      if (ignore) return;
      const response = await fetch(url);
      const jsonData = await response.json();
      setPeople(jsonData);
    }
    fetchData();
  }, [])

  return (
    <>
      <header>
        <h1>Hire Your Team</h1>
        <nav>
          <Navigation />
        </nav>
      </header>
      <Routes>
        <Route path="/" element={<Welcome />} />
        <Route path="/dashboard" element={<Dashboard
                                            people={people}
                                            hiredPeople={hiredPeople}/>} />
        <Route path="/view/:id" element={<PersonProfile
                                            people={people}
                                            setHiredPeople={setHiredPeople}/>} />
      </Routes>
    </>
  )
}
