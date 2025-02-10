import { useEffect, useState } from 'react'
import './App.css'
import { Link, Route, Routes } from 'react-router-dom'
import Dashboard from './pages/Dashboard'
import { Person, PeopleData } from './objects/PersonInfoObjects'
import PersonProfile from './pages/PersonProfile'
import { peopleURL } from './apiEndpoints/endpoints'

export default function App() {
  const [hiredPeople, setHiredPeople] = useState<Person[]>([])
  const [candidates, setCandidates] = useState<Person[]>([])
  const hirePerson = (person : Person) => {
    var hired = hiredPeople;
    hired.push(person);
    setHiredPeople(hired);
    console.log("HIRED!")
  }

  useEffect(() => {
    const fetchPeople = async () => {
      const response = await fetch(peopleURL + "/?results=10");
      const jsonData : PeopleData = await response.json();
      const personList : Person[] = jsonData.results.map((person) => {return person}); // Convert to an array of person objects
     
      setCandidates(personList);
      
    }
    fetchPeople();
  }, [hiredPeople])

  console.log(hiredPeople)

  

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
      <Routes>
        <Route path="/"
              element= {<Dashboard hiredPeople={hiredPeople}
                                    hirePerson={hirePerson}
                                    candidates={candidates} />} />
        <Route path="/profile/:id"
              element={<PersonProfile  candidates={candidates}
                                      hirePerson={hirePerson}
                                      hired={hiredPeople}/> } />
      </Routes>
    </>
  )
}
