import { useState, useEffect } from 'react'
import './App.css'
import { Link, Route, Routes } from 'react-router-dom';
import Dashboard from './pages/Dashboard';
import EditPerson from './pages/Dashboard/components/EditPerson';
import PersonProfile from './pages/PersonProfile';

export default function App() {


  const [hiredPeople, setHiredPeople] = useState([])
  const [people, setPeople] = useState([])


  useEffect(() => {
    const fetchData = () => {
      fetch("https://randomuser.me/api/?results=50")
      .then(response => response.json())
      .then(data => {
        setPeople(data.results)
      })
    }

    console.log(people)
    fetchData();
  }, []);

  const hirePerson = (person, wage) => {
    const updatedPerson = person
    updatedPerson.wage = wage
    setHiredPeople((prevHiredPeople) => [...prevHiredPeople, updatedPerson])
  }

  const editPerson = (id, updatedPerson) => {
    setHiredPeople((prevHiredPeople) => {
      const updatedPeople = [...prevHiredPeople];
      updatedPeople[id] = updatedPerson;
      return updatedPeople;
    });
  };

  /*const hirePerson = (p) => {
    if (hiredPeople.includes(p)) return;
    setHiredPeople((prevHiredPeople) => [...prevHiredPeople, p]);
  };

  const firePerson = (p) => {
    if (!hiredPeople.includes(p)) return;
    setHiredPeople((prevHiredPeople) => prevHiredPeople.filter((person) => person !== p));
  };*/

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
      <Route path="/" 
        element={
        <Dashboard hiredPeople={hiredPeople} people={people}/>} />
      <Route path="/people/:id" 
        element={
        <PersonProfile people={people} hirePerson={hirePerson} hiredPeople={hiredPeople}/>} />
      <Route
          path="/edit/:id"
          element={<EditPerson hiredPeople={hiredPeople} editPerson={editPerson} setHiredPeople={setHiredPeople}/>}
        />
    </Routes>
  </>
    

  )
}
