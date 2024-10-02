import { useEffect, useState } from 'react';
import { Link, Route, Routes } from "react-router-dom";
import './App.css';
import Dashboard from './pages/Dashboard';
import PersonProfile from './pages/PersonProfile';

export default function App() {
  const url = 'https://randomuser.me/api/?results=50'
  const [hiredPeople, setHiredPeople] = useState([])
  const [people, setPeople] = useState([])


  useEffect(() => {
    fetchData();

  }, []);

  const fetchData = async () => {
    const response = await fetch(url)
    const jsonData = await response.json()
    setPeople(...people, jsonData.results)
  };

  return (
    <>
      <header>
        <h1>Hire Your Team</h1>
        <nav>
          <ul>
            <li>
              <Link to='/'>Dashboard</Link>
            </li>
          </ul>
        </nav>
      </header>
      <Routes>
        <Route path="/" element={<Dashboard people={people} hiredPeople={hiredPeople} />} />
        <Route path="/view/:id" element={<PersonProfile people={people} hiredPeople={hiredPeople} setHiredPeople={setHiredPeople}/>} />
      </Routes>
    </>
  )
}
