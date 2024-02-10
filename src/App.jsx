import { useState, useContext, createContext } from 'react'
import { Routes, Route, Link } from 'react-router-dom'
import Dashboard from './pages/Dashboard'
import './App.css'
import PeopleListItem from './pages/Dashboard/components/PeopleListItem'

export const AppContext = createContext(null)

export default function App() {
  const [hiredPeople, setHiredPeople] = useState([])
  const [people, setPeople] = useState([])
  

  return (
    <>
    <AppContext.Provider value={{ hiredPeople, setHiredPeople, people, setPeople }}>
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
        <Route path="/" element={<Dashboard />} />
        <Route path="/profile/:id" element={<PeopleListItem />} />
      </Routes>
    </AppContext.Provider>
    </>
  )
}
