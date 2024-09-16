import { useEffect, useState } from 'react'
import './App.css'

import { Link, Route, Routes } from 'react-router-dom'

import Dashboard from './pages/Dashboard'
import PersonProfile from './pages/PersonProfile'

var listOfPeople = []

export default function App() {
  const [hiredPeople, setHiredPeople] = useState([])
  const [people, setPeople] = useState([])

  useEffect(() => {
    fetch("https://randomuser.me/api/?results=50")
    .then((res) => res.json())
    .then((res) => setPeople(res.results))
  }, [])

  if (listOfPeople <= 0) {
    listOfPeople = [...people]

    for (var i = 0; i < listOfPeople.length; i++) {
      listOfPeople[i]['id'] = i
    }
  }

  const hiredCallback = (person, isEditing) => {
    if (isEditing)
      return

    person['hired'] = true // give them the hired tag
    setHiredPeople([...hiredPeople, person])
  }

  return (
    <>
      <header>
        <h1>Hire Your Team</h1>
        <ul>
          <li>
            <Link to="/">Dashboard</Link>
          </li>
        </ul>
        <nav>
        <Routes>
          <Route path="/" element={<Dashboard hiredPeople={hiredPeople} people={listOfPeople} />} />
          <Route path="/view/:id" element={<PersonProfile people={listOfPeople} hiredCallback={hiredCallback} />} />
        </Routes>
        </nav>
      </header>
    </>
  )
}
