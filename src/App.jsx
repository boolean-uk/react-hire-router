import { useState, useEffect } from 'react'
import './App.css'
import Dashboard from './pages/Dashboard'
import { Link, Route, Routes } from 'react-router-dom';
import PersonProfile from './pages/PersonProfile';

export default function App() {
  const [people, setPeople] = useState([])
  const [hiredPeople, setHiredPeople] = useState([])

  useEffect(() => {
      fetch("https://randomuser.me/api/?results=50")
        .then(res => res.json())
        .then(people => setPeople(people.results))
    }, [])

  return (
    <div className="App">
      <header>
        <h1>Hire Your Team</h1>
        <nav>
          <ul>
            <li>
              <Link to="/">Dashboard</Link>
            </li>
          </ul>
        </nav>
      </header>
      <Routes>
        <Route path="/" element={<Dashboard people={people} hiredPeople={hiredPeople}/>}/>
        <Route path="/view/:id" element={<PersonProfile people={people} hiredPeople={hiredPeople} setHiredPeople={setHiredPeople} />}/>
      </Routes>
    </div>
  )
}
