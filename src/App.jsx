
import { useState, useEffect} from 'react'
import './App.css'
import Dashboard from './pages/Dashboard';

import { Route, Routes, Link } from 'react-router-dom';
import PersonProfile from './pages/PersonProfile';



export default function App() {

  const [hiredPeople, setHiredPeople] = useState([])

  useEffect(() => {
    fetch('https://randomuser.me/api/?results=50') 
   .then((response)=> response.json())
   .then((data) =>  console.log(data))
  }, [])

  return (
    <>
      <header>
        <h1>Hire Your Team</h1>
        <nav>
          <ul>
            <li>
              <Link to='dashboard'> Dashborad</Link>
            </li>
          </ul>
        </nav>
      </header>
      <Routes>
        <Route 
        path='/dashboard' 
        element={<Dashboard hiredPeople={hiredPeople}/>}
        />
        <Route path='/john/:name'
        element={<PersonProfile hiredPeople={hiredPeople} setHiredPeople={setHiredPeople}/>}/>
      </Routes>
    </>
  )
}
