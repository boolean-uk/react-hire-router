import { useState, useEffect } from 'react'
import './App.css'
import Dashboard from './pages/Dashboard'
import PersonProfile from './pages/PersonProfile'
import { Link, Routes, Route, useNavigate } from 'react-router-dom'
export default function App() {
  const [hiredPeople, setHiredPeople] = useState([])
  const [people, setPeople] = useState([])

  const apiURL = "https://randomuser.me/api/?results=50" // 50 users, randomly
  const navigate = useNavigate();

  function navigateToDashboard() {
    navigate('/dashboard');
  }

  useEffect(() => {
    fetch(apiURL, {method: "GET"})
    .then((res) => res.json())
    .then((data) => {
      const result = data.results.map((person, index) => ({
        ...person,
        id: index + 1,
        hired: false 
      }));
      setPeople(result)
    })
    .catch((error) => console.error("Error fetching data:", error))
  }, [])


  return (
    <>
      <div className="App">
      <header>
        <h1>Hire Your Team</h1>
        <nav>
          <ul>
            <li>
              <Link to="/dashboard">Dashboard</Link>
            </li>
          </ul>
        </nav>
      </header>
      <Routes>
        <Route
          path="/dashboard/*"
          element={<Dashboard people = {people} hiredPeople = {hiredPeople}/>}
        />
        <Route
          path="/view/:id"
          element={<PersonProfile people = {people} setPeople = {setPeople} hiredPeople = {hiredPeople} setHiredPeople = {setHiredPeople} navigateToDashboard={navigateToDashboard}/>}
        />
      </Routes>
    </div>
    </>
  )
}
