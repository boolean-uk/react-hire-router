import { useState, useEffect } from 'react'
import { Routes, Route, Link } from 'react-router-dom'
import './App.css'
// import PeopleList from './pages/Dashboard/components/PeopleList'
import Dashboard from './pages/Dashboard'
import PeopleListItem from './pages/Dashboard/components/PeopleListItem'
import PersonProfile from './pages/PersonProfile'

export default function App() {
  const [hiredPeople, setHiredPeople] = useState([])

  // const url = "https://randomuser.me/api/?results=50"
  // const [data, setData] = useState(null)

  const personHire = (person) => {
    setHiredPeople([...hiredPeople, person])
  }

  // useEffect(() => {
  //   const fetchData = async () => {
  //     const response = await fetch(url)
  //     const jsonData = await response.json()
  //     setData(jsonData)
  //   }
  //   fetchData()
  // },[])

  return (
    <>
      <header>
        <h1>Hire Your Team</h1>
        <nav>
          {/* <ul>
            <li><Dashboard hiredPeople={hiredPeople}/></li>
          </ul> */}
          <Link to="/">Dashboard</Link>{" "}
          {/* <Link to="/about">About</Link> |{" "} */}
          {/* <Link to="/contact">Contact</Link> */}
        </nav>
        <Routes>
          <Route path="/" element={<Dashboard hiredPeople={hiredPeople}/>} />
          <Route path="/view/:id" element={<PersonProfile personHire={personHire}/>} />
          {/* <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} /> */}
      </Routes>
      </header>
    </>
  )
}
