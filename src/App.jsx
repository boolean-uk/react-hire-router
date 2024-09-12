import { useState, useEffect } from 'react'
import { Route, Routes, Link } from "react-router-dom";
import './App.css'
import Dashboard from './pages/Dashboard';
import PersonProfile from "./pages/PersonProfile";

export default function App() {
  const [hiredPeople, setHiredPeople] = useState([])

  const [peopleData, setPeopleData] = useState()

useEffect(() => {
  fetch("https://randomuser.me/api/?results=50")
  .then((res) => res.json())
  .then((data) => setPeopleData(data.results))
}, [])

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
        <Route
          path="/dashboard"
          element={
            <Dashboard hiredPeople={hiredPeople} peopleData={peopleData} />
          }
        />
        <Route
          path="/view/:id"
          element={
            <PersonProfile
              people={peopleData}
              hiredPeople={hiredPeople}
              setHiredPeople={setHiredPeople}
              isEditLink={false}
            />
          }
        />
        <Route
          path="/edit/:id"
          element={
            <PersonProfile
              people={peopleData}
              hiredPeople={hiredPeople}
              setHiredPeople={setHiredPeople}
              isEditLink={true}
            />
          }
        />
      </Routes>
    </>
  );
}
