import { useState, useEffect } from 'react'
import { Route, Routes, Link} from 'react-router-dom'
import PeopleList from './pages/Dashboard/components/PeopleList'
import './App.css'

export default function App() {
  const [hiredPeople, setHiredPeople] = useState([])

  return (
    <>
      <header>
        <h1>Hire Your Team</h1>
        <nav>
          <ul>
          <Link to="/">Dashboard</Link>
          </ul>
        </nav>
      </header>
      <Routes>
        <Route path ="/" element={<PeopleList />} />
      </Routes>
    </>
  )
}
