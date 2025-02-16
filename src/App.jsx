import { useEffect, useState } from 'react'
import './App.css'
import { Link, Route, Routes, useNavigate } from 'react-router-dom'
import Dashboard from './pages/Dashboard';
import PersonProfile from './pages/PersonProfile';
import EditForm from './pages/PersonProfile/components/EditForm';

export default function App() {
  const [hiredPeople, setHiredPeople] = useState([]);
  const navigate = useNavigate();
  const [people, setPeople] = useState([]);

  useEffect(() => {
    fetch('https://randomuser.me/api/?results=50')
    .then (res => res.json())
    .then (data =>setPeople(data.results.map((person, id) => {
      person.id = id
      return person})))
  }, []);

  const hirePerson = (person, wage) => {
    person.wage = wage;
    setHiredPeople([...hiredPeople, person]);
  }

  const updateWage = (id, newWage) => {
    setHiredPeople(hiredPeople.map(person => {
      if (person.id === id) {
        return {...person, wage: newWage};
      }
      return person;
    }));
  }

  return (
    <>
      <header>
        <h1>Hire Your Team</h1>
        <nav>
          <ul>
            <li><Link to="/">Dashboard</Link></li>
          </ul>
        </nav>
      </header>
      <Routes>
        <Route path='/' element={<Dashboard hiredPeople={hiredPeople} people={people} />}/>
        <Route path='/view/:id' element={<PersonProfile people={people} hirePerson={hirePerson}/>}/>
        <Route path='/edit/:id' element={<EditForm hiredPeople={hiredPeople} updateWage={updateWage} />} />
      </Routes>
    </>
  )
}
