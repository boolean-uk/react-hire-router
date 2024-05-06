import { useState, useEffect} from 'react'
import { Route, Routes, Link } from 'react-router-dom';
import PersonProfile from './pages/PersonProfile';
import Dashboard from './pages/Dashboard/index'
import './App.css'

export default function App() {
  const [hiredPeople, setHiredPeople] = useState([])
  
  const [people, setPeople] = useState([])

    useEffect(() => {
        fetch("https://randomuser.me/api/?results=50")
            .then((response) => response.json())
            .then((json) => setPeople([...json.results]))
            .catch(new Error("Error in contact fetch"))
    }, [])


  return (
    <>
      <header>
        <h1>Hire Your Team</h1>
        <nav>
          <ul>
            <li><Link to='/dashboard'>Dashboard</Link></li>
          </ul>
        </nav>
      </header>
      <Routes>
        {/* <Route 
        path='/*'
        element={<App/>}
        /> */}
        
        <Route
        path='/dashboard/*'
        element={<Dashboard hiredPeople={hiredPeople} setHiredPeople={setHiredPeople} people={people} setPeople={setPeople}/>}
        />
        
        <Route
                    path="/person/:username"
                    element={<PersonProfile people={people} hiredPeople={hiredPeople} setHiredPeople={setHiredPeople}/>}
                />
        
      </Routes>
    </>
  )
}
