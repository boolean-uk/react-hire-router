import { useEffect, useState } from 'react'
import './App.css'
import { Link, Route, Routes } from 'react-router-dom'
import Dashboard from './pages/Dashboard'
import PersonProfile from './pages/PersonProfile'

export default function App() {
  const [hiredPeople, setHiredPeople] = useState([])
  const [people, setPeople] = useState([])
  useEffect(() => {
    const localPeople = JSON.parse(localStorage.getItem('people')) //Using local storage so going to /view/:id will not fetch new data making the url invalid
    if (localPeople) {
      setPeople(localPeople)
    }
    else {
      fetch('https://randomuser.me/api/?results=50')
        .then(response => response.json())
        .then(data => {
          setPeople(data.results)
          localStorage.setItem('people', JSON.stringify(data.results))
        })
    }
  }, [])
  return (
    <>
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
        <Route path="/" element={<Dashboard people={people} hiredPeople={hiredPeople} />} />
        <Route path="/view/:id" element={<PersonProfile people={people} hiredPeople={hiredPeople} setHiredPeople={setHiredPeople} />} />
      </Routes>
    </>
  )
}
