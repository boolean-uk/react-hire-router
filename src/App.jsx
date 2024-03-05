import { useState, useEffect, createContext } from 'react'
import './App.css'
import { Route, Routes, Link } from 'react-router-dom';
import { apiUrl, apiOptions } from './Utils/static.js'
import Dashboard from "./pages/Dashboard/index.jsx"
import PersonProfile from "./pages/PersonProfile/index.jsx"

// eslint-disable-next-line react-refresh/only-export-components
export const peopleContext = createContext()

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
      <peopleContext.Provider
        value={{people: people, hirePerson: hirePerson, hiredPeople: hiredPeople}}
      >
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
          element={<PersonProfile/>}
          />
        <Route 
          path="/"
          element={<Dashboard/>}
          />
      </Routes>
      </peopleContext.Provider>
    </>
  )
}
