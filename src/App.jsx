import { useEffect, useState } from 'react'
import { Routes, Route } from 'react-router-dom'
import Dashboard from './pages/Dashboard'
import Profile from './pages/PersonProfile/index'
import './App.css'

export default function App() {
  const [hiredPeople, setHiredPeople] = useState([])
  const [people, setPeople] = useState([])

  useEffect(() => {
    fetch("https://randomuser.me/api/?results=50")
      .then((rs) => rs.json())
      .then((data) => setPeople(data.results))
  }, [])

  const hirePerson = (person, wage) => {
    setHiredPeople((prev) => {
      const alreadyHired = prev.some((hired) => hired.login.uuid === person.login.uuid);
      if (alreadyHired) return prev;
      const hiredWithWage = { ...person, wage };
      return [...prev, hiredWithWage];
    });
  };
  

  return (
    <>
      <header>
        <h1>Hire Your Team</h1>
      </header>
      <Routes>
        <Route
          path="/"
          element={<Dashboard people={people} hiredPeople={hiredPeople} />}
        />
        <Route
          path="/view/:id"
          element={<Profile people={people} hirePerson={hirePerson} />}
        />
      </Routes>
    </>
  )
}
