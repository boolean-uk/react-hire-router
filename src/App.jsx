import { useState, useEffect } from 'react'
import {Link, Route, Routes} from 'react-router-dom'
import Dashboard from './pages/Dashboard'
import PeopleList from './pages/Dashboard/components/PeopleList'
import HireForm from './pages/PersonProfile/components/HireForm'
import './App.css'
import PersonProfile from './pages/PersonProfile'

export default function App() {
  const [hiredPeople, setHiredPeople] = useState([])
  const[people, setPeople] = useState([])

  useEffect(() => {
    fetch("https://randomuser.me/api/?results=50")
      .then((res) => res.json())
      .then((data) => {
        assignId(data.results)
        console.log(data.results)
        setPeople(data.results)})
  }, [])

  //set ID from 1 to lentgh of listOfPeople
  const assignId = (listOfPeople) => {
    listOfPeople.forEach((element, id) => {
      element.id = id + 1;
    });
  }
    
  return (
    <>
      <header>
        <h1>Hire Your Team</h1>
        <nav>
          <ul>
            <li>
              <Link to ="/">Dashboard</Link>
            </li>
          </ul>
        </nav>
      </header>
      <Routes>
        <Route path="/" element={<Dashboard people={people} hiredPeople={hiredPeople} />}></Route>
        <Route path="/view/:id" element={<PersonProfile people={people} setHiredPeople={setHiredPeople} hiredPeople={hiredPeople}/>}></Route>
      </Routes>
    </>
  )
}
