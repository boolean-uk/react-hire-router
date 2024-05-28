import { useState, useEffect } from 'react'
import { Link, Route, Routes } from 'react-router-dom'
import Dashboard from './pages/Dashboard'
import PersonProfile from './pages/PersonProfile'
import './App.css'
import PropTypes from 'prop-types'

export default function App() {
  // State for hired people and people
  const [hiredPeople, setHiredPeople] = useState([])
  const [people, setPeople] = useState([])

  // Fetch data from API and assign IDs to people
  useEffect(() => {
    fetch("https://randomuser.me/api/?results=50")
    .then((res) => res.json())
    .then((data) => {
      assignId(data.results)
      console.log(data.results)
      setPeople(data.results)
    })
  }, [])

  // Function to assign IDs to people
  const assignId = (listOfPeople) => {
    listOfPeople.forEach((element, id) => {
      element.id = id + 1
    })
  }

  return (
    <>
      {/* Header with navigation */}
      <header>
        <h1>Hire Your Team</h1>
        <nav>
          <ul>
            <li><Link to="/">Dashboard</Link></li>
          </ul>
        </nav>
      </header>

      {/* Routes for Dashboard and PersonProfile components */}
      <Routes>
        <Route path="/" element={<Dashboard people={people} hiredPeople={hiredPeople} />} />
        <Route path="/view/:id" element={<PersonProfile people={people} setHiredPeople={setHiredPeople} hiredPeople={hiredPeople} />} />
      </Routes>
    </>
  )
}

// PropTypes for type-checking (for PersonProfile component props)
PersonProfile.propTypes = {
  people: PropTypes.array.isRequired, // Array of people data
  setHiredPeople: PropTypes.func.isRequired, // Function to set hired people
  hiredPeople: PropTypes.array.isRequired, // Array of hired people
};
