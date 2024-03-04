import { useState, useEffect } from 'react'
import './App.css'
import { Routes, Route, Link, useParams } from 'react-router-dom'
import PersonProfile from './pages/PersonProfile'
import Dashboard from './pages/Dashboard'

export default function App() {
  const [peopleData, setPeopleData] = useState([])
  const [hiredPeople, setHiredPeople] = useState([])
  const [selectedPerson, setSelectedPerson] = useState({})

function hirePerson(person){
  setHiredPeople([...hiredPeople, person])

  // peopleData.concat(person, 1)
}

// function editHiredPerson(person){
//   setHiredPeople([...hiredPeople, person])

//   // peopleData.concat(person, 1)
// }

  useEffect(() => {
    fetch(`https://randomuser.me/api/?results=50`)
      .then(response => response.json())
      .then(data => setPeopleData(data.results))
  }, [])

  useEffect(() => {
    console.log("PeopleData:", peopleData)
  }, [peopleData])


  return (
  <>
      <header>
        <h1>Hire Your Team</h1>
        <nav>
          <Routes>
          <Route path="/" element={<Dashboard hiredPeople={hiredPeople} peopleData={peopleData}/>} />
          <Route path="/view/:id" element={<PersonProfile peopleData={peopleData} hirePerson={hirePerson}/>}/>
          <Route path="/edit/:id" element={<PersonProfile peopleData={hiredPeople}/>}/>
          </Routes>
        </nav>
      </header>
  </>
  )
}
