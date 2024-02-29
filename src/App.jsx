import { useEffect, useState } from 'react'
import './App.css'
import { Route, Link, Routes } from 'react-router-dom'
import Dashboard from './pages/Dashboard'
import PersonProfile from './pages/PersonProfile'
import EditProfile from './pages/EditProfile'

export default function App() {
  const [hiredPeople, setHiredPeople] = useState([])
  const [people, setPeople] = useState([])
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true)
      const response = await fetch("https://randomuser.me/api/?results=50")
      const data = await response.json()
      setPeople(data.results)
      setIsLoading(false)
    }
    fetchData()
  },[])

  const hire = (person) => {
    setHiredPeople([...hiredPeople, person])
    const updatedPeople = people.filter(p => p !== person);
    setPeople(updatedPeople)
  }

  const update = (updatedHiredPeople) => {
    setHiredPeople(updatedHiredPeople)
  }

  return (
    <>{isLoading ? (<div>Loading ...</div>) : (
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
        <Route path='/' element={<Dashboard people={people} hiredPeople={hiredPeople} />}/>
        <Route path='/view/:id' element={<PersonProfile people={people} hire={hire}/>} />
        <Route path='/edit/:id' element={<EditProfile people={hiredPeople} update={update}/>} />
      </Routes>
      </>
    )}
    </>
  )
}
