import { useState, useEffect } from 'react'
import { Route, Routes, Link } from 'react-router-dom';
import Dashboard from './pages/Dashboard'
import PersonProfile from './pages/PersonProfile';
import './App.css'

export default function App() {
  const [hiredPeople, setHiredPeople] = useState([])
  const [people, setPeople] = useState([])

  useEffect(() => {
    const fetchData = async () => {
            try {
                const response = await fetch('https://randomuser.me/api/?results=50')
                const data = await response.json()
                setPeople(data.results)
            } catch (error) {
                console.error('Error fetching data:', error)
            }
          }
          fetchData()
        }, []
      )

  return (
    <>
      <header>
        <h1>Hire Your Team</h1>
        <nav className="navbar-layout">
          <ul className="navbar">
            <li><Link to="/dashboard">Dashboard</Link></li>
            {/*Used for testing: <li><Link to="/view/0">Hire</Link></li>*/}
          </ul>
        </nav>
      </header>

      <Routes>
       <Route path="/dashboard" element={<Dashboard hiredPeople={hiredPeople} people={people}/>} />
       <Route path="/view/:id" element={<PersonProfile people={people} setHiredPeople={setHiredPeople}/>}/>
      </Routes>
    </>
  )
}
