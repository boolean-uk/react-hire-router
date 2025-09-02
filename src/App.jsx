import { useEffect, useState } from 'react'
import './App.css'
import { Link, Route, Routes, useNavigate } from 'react-router-dom'
import PersonProfile from './pages/PersonProfile/index.jsx'
import Dashboard from './pages/Dashboard/index.jsx'
import { Navigate } from 'react-router-dom'

export default function App() {
  const [hiredPeople, setHiredPeople] = useState([])
  const [people, setPeople] = useState([])
  const nav = useNavigate();

  useEffect(() => {fetch('https://randomuser.me/api/?results=50').then(res => res.json()).then(data => setPeople(data.results))}, [])
  console.log(people)

  const handleReturn = () => {nav('/')};

return (
    <>
      <header>
        <h1 onClick={handleReturn}>Hire Your Team</h1>
        <nav>
          <li>
          <Link to="/Dashboard">Dashboard</Link>
          </li>
        </nav>
      </header>

      <main>
        <Routes>
          <Route
            path="/Dashboard"
            element={<Dashboard people={people} hiredPeople={hiredPeople} />}
          />
          <Route
            path="/view/:id"
            element={
              <PersonProfile
                people={people}
                hiredPeople={hiredPeople}
                setHiredPeople={setHiredPeople}
                setPeople={setPeople}
              />
            }
          />
        </Routes>
      </main>
    </>
  );
}
