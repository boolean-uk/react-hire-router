import './App.css'
import { useState, useEffect } from 'react'
import { Route, Routes } from 'react-router-dom'
import Dashboard from './pages/Dashboard'
import PersonProfile from './pages/PersonProfile'

export default function App() {
  const [hiredPeople, setHiredPeople] = useState([])
  const [people, setPeople] = useState([])

  const addToHired = (data) =>
  {
    setHiredPeople([...hiredPeople, data.person])
  }

  useEffect(() =>
  {
    fetch("https://randomuser.me/api/?results=50")
    .then((response) => response.json())
    .then((data) =>
    {
      //console.log("DATA", data)
      setPeople(data.results)
    })}, [])

  return (
    <>
      <header>
        <h1>Hire Your Team</h1>
        <nav>
          <ul>
            <li>Dashboard</li>
          </ul>
        </nav>
      </header>

      <Routes>
        <Route path='/dashboard' element={<Dashboard hiredPeople={hiredPeople} people={people} />} />
        <Route path='/dashboard/view/:id' element={<PersonProfile people={people} addToHired={addToHired}/>} />
      </Routes>
    </>
  )
}
