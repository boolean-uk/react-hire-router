import { useState, useEffect } from 'react'
import './App.css'
import { Routes, Route, Link } from 'react-router-dom';
import Dashboard from './pages/Dashboard';
import PersonProfile from './pages/PersonProfile';

export default function App() {
  const [people, setPeople] = useState([])
  const [hiredPeople, setHiredPeople] = useState([])

  const address = 'https://randomuser.me/api/?results=70'

  useEffect(() => {
    const fetchData = () => {
      fetch(address)
        .then(res => res.json())
        .then(data => {
          // some fetched people don't have ids for some reason
          const filteredPeople = data.results.filter(person => person.id && person.id.value !== null).slice(0, 50);
          setPeople(filteredPeople);
        })
        .catch(error => console.error("Fetching people failed:", error));
    };
    fetchData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])


  return (
    <>
      <header>
        <h1>Hire Your Team</h1>
        <nav>
          <ul>
            <Link to="/">Dashboard</Link>
          </ul>
        </nav>
      </header>
      <Routes>
        <Route path="/" element={
          <Dashboard
            people={people}
            setPeople={setPeople}
            hiredPeople={hiredPeople}
          />} />
        <Route path="/view/:id" element={
          <PersonProfile
            people={people}
            hiredPeople={hiredPeople}
            setPeople={setPeople}
            setHiredPeople={setHiredPeople}
          />} />
      </Routes>
    </>
  )
}
