import { useState, useEffect } from 'react'
import './App.css'
import { Route, Routes, Link, useNavigate } from 'react-router-dom';
import Dashboard from './pages/Dashboard';
import PersonProfile from './pages/PersonProfile';
import EditHiredPersonProfile from './pages/PersonProfile/components/EditHiredPersonProfile';


export default function App() {
  const [hiredPeople, setHiredPeople] = useState([])
  const [people, setPeople] = useState([])
  const navigate = useNavigate()

  useEffect(() => {
    fetch(`https://randomuser.me/api/?results=50`)
     .then(res => res.json())
     .then(data => {
      const temp = data.results.map((person, wage) => {person.wage = wage
        person.wage =0;
        return person
      })
      setPeople(temp)
      const tmp = data.results.map((person, id) => {person.id = id
        return person
      })
      setPeople(tmp)
  })
     
 },[])

  return (
    <>
      <header>
        <h1>Hire Your Team</h1>
        <nav>
          <ul>
            <li>
            <Link to ="/">Dashboard </Link>
            </li>
          </ul>
        </nav>
        <button onClick={() => navigate("/")}>Go to HomePage</button>
      <button onClick={() => navigate(1)}>Go Forward</button>
      <button onClick={() => navigate(-1)}>Go Back</button>
      </header>
      <Routes>
      <Route
          path="/"
          element={<Dashboard hiredPeople={hiredPeople} people = {people}/>}
        />
        <Route
          path="/view/:id"
          element={<PersonProfile hiredPeople={hiredPeople} people = {people} setHiredPeople={setHiredPeople} setPeople={setPeople} />}
        />
        <Route
          path="/view/:id/edit"
          element={<EditHiredPersonProfile hiredPeople={hiredPeople}/>}
        />
      </Routes>
      
    </>
  )
}
