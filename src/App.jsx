import { useState, useEffect } from 'react'
import { Link, Route, Routes } from 'react-router-dom';
import Dashboard from "./pages/Dashboard"
import './App.css'
import PersonProfile from './pages/PersonProfile';

export default function App() {
  const [hiredPeople, setHiredPeople] = useState([])

  // Move people state to here to make more accessible
  const [people, setPeople] = useState([])

  useEffect(() => {
    fetch("https://randomuser.me/api/?results=50").then(res => res.json()).then(data => setPeople(data.results))
  }, [])

  const hirePerson = (personToHire) => {
    // If person is already hired, update salary instead
    if (hiredPeople.some(person => person.login.uuid === personToHire.login.uuid)) {
      setHiredPeople(hiredPeople.map(person => person.login.uuid === personToHire.login.uuid ? {...person, wage: personToHire.wage} : person))
    } else {
      setHiredPeople([...hiredPeople, personToHire])
    }
  }

  return (
    <>
      <header>
        <h1>Hire Your Team</h1>
        <nav>
          <ul>
            <li><Link to="/">Dashboard</Link></li>
          </ul>
        </nav>
      </header>
      <Routes>
        <Route path="/" element={<Dashboard hiredPeople={hiredPeople} people={people} />} />
        <Route path="/view/:id" element={<PersonProfile hiredPeople={hiredPeople} hirePerson={hirePerson} people={people}/>} />
        <Route path="/edit/:id" element={<PersonProfile hiredPeople={hiredPeople} hirePerson={hirePerson} people={people}/>} />
      </Routes>
    </>
  )
}
