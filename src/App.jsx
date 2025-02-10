import { useEffect, useState } from 'react'
import { Route, Routes, Link } from 'react-router-dom';
import './App.css'
import Dashboard from './pages/Dashboard';
import PersonProfile from './pages/PersonProfile';
import PersonEdit from './pages/PersonProfile/components/personEdit.jsx';

export default function App() {
  const url ="https://randomuser.me/api/?results=50"
  const [hiredPeople, setHiredPeople] = useState([])
  const [people, setPeople] = useState([])
  

  useEffect(()  => {
    const fetchData = async () => {
      const response = await fetch(url)
      const jsonData = await response.json()
      setPeople(...people, jsonData.results)
    }
    fetchData();

  }, [])

  return (
    <>
      <header>
        <h1>Hire Your Team</h1>
        <nav>
          <ul>
            <li>
              <Link to= "/"> Dashboard </Link>
            </li>
          </ul>
        </nav>
      </header>
      <Routes>
      <Route path='/' element={<Dashboard people={people} hiredPeople={hiredPeople} />}  />
      <Route path='/view/:id' element={<PersonProfile  hiredPeople={hiredPeople} setHiredPeople={setHiredPeople} people={people} />} />
      <Route path='/edit/:id' element={<PersonEdit  setHiredPeople={setHiredPeople} people={hiredPeople} />} />
      </Routes>
    </>
  )
}
