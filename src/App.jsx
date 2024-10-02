import { useState, useEffect } from 'react'
import { Routes, Route, Link, useParams, useNavigate } from 'react-router-dom'
import Dashboard from './pages/Dashboard'
import PersonProfile from './pages/PersonProfile'


export default function App() {

  const [hiredPeople, setHiredPeople] = useState([])
  const [randomUsers, setRandomUsers] = useState([])
  console.log(randomUsers)

  useEffect(() => {

      const fetchRandomUsers = async () => {

        const response = await fetch('https://randomuser.me/api/?results=50')

        if (!response.ok) {

          throw new Error("Failed to fetch random users!")

        }

        const randomUsers = await response.json()
        setRandomUsers(randomUsers.results)

      }

      fetchRandomUsers()

  }, []);

  return (
    <>
      <header>
        <h1>Hire Your Team</h1>
        <nav>
          <ul>
            <li>
              <Link to="/">
                Dashboard
              </Link>
            </li>
          </ul>
        </nav>
      </header>
      <Routes>
        <Route 
          path="/"
            element={
              <Dashboard
                people={randomUsers}
                hiredPeople={hiredPeople}
          />
          } 
        />  
        <Route path={`/view/:uuid`} element={
            <PersonProfile people={randomUsers} setHiredPeople={setHiredPeople} />
          }/>
      </Routes>
    </>
  )
}
