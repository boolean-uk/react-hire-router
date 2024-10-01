import { useState } from 'react'
import './App.css'
import Dashboard from './pages/Dashboard'
import PersonProfile from './pages/PersonProfile'
import { Routes, Route, Link } from 'react-router-dom'

export default function App() {
  const [hiredPeople, setHiredPeople] = useState([])

  const manageHire = (worker) => {
    if(worker.wage > 0) {
      setHiredPeople(onPayroll => [...onPayroll, worker])
    }
  }

  const manageEdit = (worker) => {
    setHiredPeople(onPayroll => {
      if(worker.wage > 0) {
        return onPayroll.map(person => person.email === worker.email ? {...person, wage: worker.wage} : person)
      } else {
        return onPayroll.filter(person => person.email !== worker.email)
      }
    })
  }

  return (
    <>
      <header>
        <h1>Hire Your Team</h1>
        <nav>
          <ul>
            <li><Link to='/'>Dashboard</Link></li>
          </ul>
        </nav>
      </header>
      <Routes>
        <Route path='/' element={<Dashboard hiredPeople={hiredPeople}/>}/>
        <Route path="/view/:id" element={<PersonProfile onSelection={manageHire} hired={false}/>}/>
        <Route path="/edit/:id" element={<PersonProfile onSelection={manageEdit} hired={true}/>}/>
      </Routes>
    </>
  )
}
