import { useState, useEffect } from 'react'
import './App.css'
import { Route, Routes, Link } from 'react-router-dom';
import { apiUrl, apiOptions } from './Utils/static.js'
import Dashboard from "./pages/Dashboard/index.jsx"
import PersonProfile from "./pages/PersonProfile/index.jsx"


export default function App() {
  const [hiredPeople, setHiredPeople] = useState([])
  const [people, setPeople] = useState([])

  const hirePerson = (person, wage) => {
    if (parseFloat(wage) <= 0) {return}
    const val = people[people.indexOf(person)]
    val.wage = parseFloat(wage)
    setPeople([...people])
    // Append the hired person to the "hiredPeople" list
    if (hiredPeople.includes(person)) {
      hiredPeople[hiredPeople.indexOf(person)].wage = parseFloat(wage)
    } else {
      setHiredPeople([...hiredPeople, person])
    }
  }

  const fetchPeople = async () => {
    await fetch(apiUrl, apiOptions)
        .then((res) => res.json())
        .then((res) => res.results)
        .then((res) => setPeople(res))
  }

  useEffect(() => {
    fetchPeople()
  }, [])


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
        <Route 
          path="/view/:id"
          element={<PersonProfile people={people} hirePerson={hirePerson}/>}
        />
        <Route 
          path="/"
          element={<Dashboard people={people.filter((p) => !hiredPeople.includes(p))} hiredPeople={hiredPeople}/>}
        />
      </Routes>
    </>
  )
}
