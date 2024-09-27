import { useEffect, useState } from 'react'
import { Link, Route, Routes} from 'react-router-dom'
import './App.css'
import Dashboard from './pages/Dashboard/index.jsx'
import PersonProfile from './pages/PersonProfile/index.jsx'

export default function App() {
  const [hiredPeople, setHiredPeople] = useState([])
  const [people, setPeople] = useState([])

  useEffect(() => {
    fetch("https://randomuser.me/api/?results=50")
      .then((response) => response.json())
      .then((data) => {
        console.log(data.results)
        setPeople(data.results)
      })    
  }, [])

  const handleHire = (candidate) => {
    if (!hiredPeople.some((person) => person.login.uuid === candidate.login.uuid)) {
        setHiredPeople((listHiredPeople) => [...listHiredPeople, candidate])
        setPeople((prevPeople) => prevPeople.filter((person) => person.login.uuid !== candidate.login.uuid))
    }
  }

  const handleUpdate = (uuid, updatedPeople) => {
    const updatedInfo = (people) =>
      people.map((person) =>
        person.login.uuid === uuid ? { ...person, ...updatedPeople } : person)
  
    setHiredPeople((prevHired) => updatedInfo(prevHired))
    setPeople((prevPeople) => updatedInfo(prevPeople))
  }

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
      <Route path="/" element={<Dashboard people={people} hiredPeople={hiredPeople} setHiredPeople={setHiredPeople} handleHire={handleHire}/>} />
      <Route path="/view/:id" element={<PersonProfile people={people} hiredPeople={hiredPeople} handleHire={handleHire} handleUpdate={handleUpdate}/>} />
    </Routes>

    </>
  )
}