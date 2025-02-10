import { useState, useEffect } from 'react'
import {Routes, Link, Route} from 'react-router-dom'
import './App.css'
import PersonProfile from './pages/PersonProfile'
import Dashboard from './pages/Dashboard'

export default function App() {
  const [hiredPeople, setHiredPeople] = useState([])
  const [people, setPeople] = useState([])
  
  useEffect(() => {
    const fetchData = async (event) => {
      fetch("https://randomuser.me/api/?results=50&seed=123")
        .then(res => res.json())
        .then(dat => {
          console.log(dat);
          dat.results.forEach(x => {x.wage = null; x.hired=false;})
          setPeople(dat.results)
        })
    };
    fetchData();
  },
  []
  );

  const HirePerson = (person, wage) => 
  {
    if(!(hiredPeople.includes(person) ))
    {
      let updatedPerson = {...person, wage: Number(wage), hired: true};
      setHiredPeople([...hiredPeople, updatedPerson])
      setPeople([...people.filter(x => x != person), updatedPerson])
    }
  }
  const editCallback = (person) => 
  {

    let updatedPerson = person;
    if (!person.hired)
    {
      updatedPerson = {...person, wage:null};
      setHiredPeople([...hiredPeople.filter(x => x.id != person.id)])
    }
    else
      setHiredPeople([...hiredPeople.filter(x => x.id != person.id), updatedPerson])

    setPeople([...people.filter(x => x.id != person.id), updatedPerson])
    
  }

  return (
    <>
      <header>
        <h1>Hire Your Team</h1>
        <nav>
          <ul>
            <li><Link to='/'>Dashboard</Link></li>
          </ul>
        </nav>
      </header>
      <Routes>
        <Route path='/' element={<Dashboard hiredPeople={hiredPeople} people={people} editCallback={editCallback} />} />
        <Route path='/view/:id' element={<PersonProfile people={people} HirePersonFunc={HirePerson} />} />
        <Route path='/edit/:id' element={<PersonProfile people={people} HirePersonFunc={HirePerson} editCallback={editCallback}/>} />
      </Routes>
    </>
  )
}
