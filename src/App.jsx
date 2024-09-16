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
    // Sees if the person is already in list (has been edited)
    let found = false
    for (let i = 0; i < hiredPeople.length; i++)
    {
      if (hiredPeople[i] === data.person)
      {
        console.log("NOT NEW PERSON!")
        found = true
      }
    }

    // Wasn't found in the list
    if (!found)
    {
      setHiredPeople([...hiredPeople, data.person])
    }
  }

  useEffect(() =>
  {
    fetch("https://randomuser.me/api/?results=50")
    .then((response) => response.json())
    .then((data) =>
    {
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
