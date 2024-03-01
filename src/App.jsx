import { useEffect, useState } from 'react'
import './App.css'
import { Link, Route, Routes } from 'react-router-dom'
import Dashboard from './pages/Dashboard'
import PersonProfile from './pages/PersonProfile'

export default function App() {
  const [people, setPeople] = useState([])
  const [hiredPeople, setHiredPeople] = useState([])

  useEffect(() => {
    fetch(`https://randomuser.me/api/?results=50`)
    .then(res => res.json())
    .then((json) => setPeople(json.results))
  }, [])

  return (
    <div className='App'>
      <header>
        <h1>Hire Your Team</h1>
        <nav>
          <ul>
            <li><Link to="/">Dashboard</Link></li>
          </ul>
        </nav>
      </header>
      <Routes>
        <Route path="/" 
        element={<Dashboard people={people} hiredPeople={hiredPeople}/>}
        />
        <Route path="/view/:id" element={<PersonProfile people={people} setHiredPeople={setHiredPeople} hiredPeople={hiredPeople}/>}/>
      </Routes>
    </div>
  )
}
