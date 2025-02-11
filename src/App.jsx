import { useEffect, useState } from 'react'
import './App.css'
import { Link, Route, Routes, useNavigate } from 'react-router-dom'
import Dashboard from './pages/Dashboard'
import PersonProfile from './pages/PersonProfile'
import EditEmployee from './pages/PersonProfile/components/EditEmployee'

export default function App() {
  const [hiredPeople, setHiredPeople] = useState([])
  const [people, setPeople] = useState([])
  const [personToHire, setPersonToHire] = ([])
  const navigate = useNavigate();

  useEffect(() => {
    fetch(`https://randomuser.me/api/?results=50`)
    .then((res) => res.json())
    .then((data) => setPeople(data));
  }, []);
  console.log(people);

  console.log(hiredPeople)
 
  



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
          element={<Dashboard people={people} hiredPeople={hiredPeople}/>}
        />
        <Route
          path="/view/:id"
          element={<PersonProfile people={people.results} hiredPeople={hiredPeople} setHiredPeople={setHiredPeople} />}
        />
        <Route
          path="/view/:id/edit"
          element={<EditEmployee people={people.results} hiredPeople={hiredPeople} setHiredPeople={setHiredPeople} />}
        />
      </Routes>
    </>
  )
}
