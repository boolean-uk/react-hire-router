import { useState, useEffect } from "react"
import { Route, Routes, Link } from "react-router-dom" 
import "./styles.css"
import PersonProfile from "./pages/PersonProfile"
import Dashboard from './pages/Dashboard'
import EditPersonProfile from "./pages/PersonProfile/EditPersonProfile"

export default function App() {
  const [hiredPeople, setHiredPeople] = useState([])
  const [people, setPeople] = useState([])

  useEffect(() => {
    fetch('https://randomuser.me/api/?results=50')
      .then(response => response.json())
      .then(data => {
        setPeople(data.results);
      });
  }, []);

  function handleHire(person) {
    setHiredPeople(prev => [ ...prev, person])
  }
// extensions function to update array with new/edited details
    function handleSave(editedPerson) {
      setHiredPeople(prev => prev.map(person => 
      person.login.uuid === editedPerson.login.uuid ? editedPerson : person
      ))
      //Had to make a change in handleSave function because the original people list was altered.
//      I had _setPeople_ for handling the save Edit instead of _setHiredPeople_
    }

  return (
    <>
      <header>
        <h1 className="make-me-star-wars">Hire Your Team</h1>
        <nav>
          <ul>
            <li><Link to="/"></Link></li>
          </ul>
        </nav>
      </header>
      <Routes>
        <Route path="/" element={<Dashboard people={people} hiredPeople={hiredPeople} />} />
        <Route path="/view/:uuid" element={<PersonProfile people={people} onHire={handleHire} />} />
        <Route path="/edit/:uuid" element={<EditPersonProfile people={hiredPeople} onSave={handleSave} />} /> {/*  new route for editing extension */}
      </Routes>
    </>
  )
}