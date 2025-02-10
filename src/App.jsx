import { useState, useEffect } from 'react'
import { Routes, Route, Link } from 'react-router-dom'
import Dashboard from './pages/Dashboard'
import PersonProfile from './pages/PersonProfile'
import EditProfile from './pages/EditProfile'
import './App.css'

export default function App() {
  const [hiredPeople, setHiredPeople] = useState([])
  const [people, setPeople] = useState([])

  useEffect(() => {
    fetch('https://randomuser.me/api/?results=50')
      .then(res => res.json())
      .then(data => {
        setPeople(data.results.map((person, index) => ({
          ...person,
          id: index
        })))
      })
  }, [])

  const handleHire = (person, wage) => {
    const hiredPerson = { ...person, wage }
    setHiredPeople([...hiredPeople, hiredPerson])
  }

  const handleUpdate = (id, updatedPerson) => {
    setHiredPeople(hiredPeople.map(person => 
      person.id === id ? updatedPerson : person
    ))
  }

  return (
    <div className="container">
      <header className="py-4">
        <h1 className="text-center mb-4">Hire Your Team</h1>
        <nav>
          <ul className="nav justify-content-center">
            <li className="nav-item">
              <Link to="/" className="nav-link">Dashboard</Link>
            </li>
          </ul>
        </nav>
      </header>
      <Routes>
        <Route path="/" element={<Dashboard hiredPeople={hiredPeople} people={people} />} />
        <Route 
          path="/view/:id" 
          element={<PersonProfile people={people} onHire={handleHire} />} 
        />
        <Route 
          path="/edit/:id" 
          element={<EditProfile hiredPeople={hiredPeople} onUpdate={handleUpdate} />} 
        />
      </Routes>
    </div>
  )
}
