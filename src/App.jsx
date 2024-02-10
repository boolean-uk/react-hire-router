import { useState, useContext, createContext } from 'react'
import './App.css'

export default function App() {
  const [hiredPeople, setHiredPeople] = useState([])
  const [people, setPeople] = useState([])

  const AppContext = createContext(null)

  return (
    <>
    <AppContext.Provider value={{ hiredPeople, setHiredPeople, people, setPeople }}>
      <header>
        <h1>Hire Your Team</h1>
        <nav>
          <ul>
            <li>Dashboard</li>
          </ul>
        </nav>
      </header>
    </AppContext.Provider>
    </>
  )
}
