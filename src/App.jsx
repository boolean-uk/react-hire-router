import { useState, useEffect } from 'react'
import './App.css'
import Dashboard from './pages/Dashboard/'
import PersonProfile from './pages/PersonProfile/'
import { Route, Routes, Link, useParams } from 'react-router-dom'

export default function App() {
  const [people, setPeople] = useState([]);
  const [hiredPeople, setHiredPeople] = useState([]);

  const fetchPeople = async () => {
    await fetch('https://randomuser.me/api/?results=50')
      .then((response) => response.json())
      .then((data) => {
        setPeople(data.results);
      })
      .catch((error) => console.error('Error fetching data:', error));
  }

  useEffect(() => {
    fetchPeople();
  }, []);

  return (
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
      <br></br>
      <Routes>
        <Route path="/" element={<Dashboard people={people} hiredPeople={hiredPeople} />} />
        <Route path="/view/:id" element={<PersonProfile people={people} setHiredPeople={setHiredPeople} hiredPeople={hiredPeople} />} />
      </Routes>
    </>
  )
}
