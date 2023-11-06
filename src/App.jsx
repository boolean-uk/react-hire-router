import { useState, useEffect } from 'react'
import { Link, Route, Routes } from 'react-router-dom'

import Dashboard from './pages/Dashboard'
import PersonProfile from './pages/PersonProfile'
import EditPage from './pages/Edit/Components/EditPage'

import './App.css'

export default function App() {
  const [hiredPeople, setHiredPeople] = useState([])
  const [people, setPeople] = useState([])

  const userURL = "https://randomuser.me/api?inc=name,id&results=50"

  // api request to fetch relevant data
  useEffect(() => {
    fetch(userURL)
    .then(res => res.json())
    .then(data => {
      setPeople(data.results)
    })
  }, [])

// link created to return to dashboard when clicked
// routes created below to render the respective component when the 'path' matches the url
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
        <Route
          path="/"
          element={ <Dashboard people={people} hiredPeople={hiredPeople} />} />
        <Route
          path="/view/:id"
          element={ <PersonProfile people={people} hiredPeople={hiredPeople} setHiredPeople={setHiredPeople} /> } />
        <Route
          path="/view/edit"
          element={ <EditPage hiredPeople={hiredPeople} setHiredPeople={setHiredPeople}/>}
          />   
      </Routes>
    </>
  )
}
