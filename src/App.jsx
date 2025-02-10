import { useEffect, useState } from 'react'
import { Link, Route, Routes } from 'react-router-dom';
import Dashboard from './pages/Dashboard/index';
import './App.css'
import PersonProfile from './pages/PersonProfile';

export default function App() {
  const [peopleList, setPeopleList] = useState([])
  const [hiredPeople, setHiredPeople] = useState([])

  useEffect(() => {
    fetch("https://randomuser.me/api/?results=50")
      .then(res => res.json())
      .then(data => setPeopleList(data.results))
  }, [])

  const handleHired = (person) => {
    setHiredPeople((hiredPerson) => {
      const isAlreadyHired = hiredPerson.some((p) => p.email === person.email);
  
      if (isAlreadyHired) {
        return hiredPerson.map((p) => (p.email === person.email ? person : p));
      } else {
        setPeopleList(peopleList.filter(p => p.email !== person.email))
        return [...hiredPerson, person];
      }
    });
  }

  return (
    <div className='App'>
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
        <Route path='/' element={<Dashboard peopleList={peopleList} hiredPeople={hiredPeople}/>}/>
        <Route path='/view/:id' element={<PersonProfile peopleList={peopleList} handleHired={handleHired}/>}/>
        <Route path='/edit/:id' element={<PersonProfile peopleList={hiredPeople} handleHired={handleHired}/>}/>
      </Routes>
    </div>
  )
}
