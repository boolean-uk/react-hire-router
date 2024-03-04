import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import './App.css'

export default function App() {
  const [hiredPeople, setHiredPeople] = useState([])
  const [people, setPeople] = useState([])

  useEffect(() => {
    fetch("https://randomuser.me/api/?results=50")
      .then(response => response.json())
      .then(setPeople)
  }, [])

  console.log("People is ", people.results )

  return (
    <>
      <header>
        <h1>Hire Your Team</h1>
        <nav>
          <ul>
            <li>Dashboard</li>
          </ul>
        </nav>
        <main>
          <h2>Available for hire</h2>
          {people.results.map((person, index) =>
            <li key={index}>
            <Link key={index} to={"/view/:id"}>{`${person.name.title} ${person.name.first} ${person.name.last}`}</Link>
            </li>
          )
        }
        </main>
      </header>
    </>
  )
}
