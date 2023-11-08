import { useState } from 'react'
import { Route, Routes, Link } from 'react-router-dom';
import './App.css'
import PeopleList from './pages/Dashboard/components/PeopleList';
import Dashboard from './pages/Dashboard';
import PersonProfile from './pages/PersonProfile';

export default function App() {
  const [hiredPeople, setHiredPeople] = useState([])
  const [people, setPeople] = useState([])

  return (
    <>
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
        <Route path='/dashboard' element={<Dashboard hiredPeople={hiredPeople} setHiredPeople={setHiredPeople}  people={people} setPeople={setPeople}/>}/>
        <Route path='/dashboard/:personId' element={<PersonProfile hiredPeople={hiredPeople} setHiredPeople={setHiredPeople} people={people} setPeople={setPeople}/>}/>
      </Routes>
    </>
  )
}
