import { useState, useEffect } from 'react'
import { Link, Route, Routes } from 'react-router-dom';
import './App.css'
import PersonProfile from './pages/PersonProfile';
import Dashboard from './pages/Dashboard';
import EditHiredPeople from './pages/Dashboard/components/EditHiredPeople';
export default function App() {
  const [hiredPeople, setHiredPeople] = useState([])

  console.log(hiredPeople)

    const [people, setPeople] = useState([])

  useEffect(() => {
    fetch(`https://randomuser.me/api/?results=5`)
      .then(response => response.json())
      .then(data => setPeople(data.results))
      .catch(error => console.error("Fetching error: ", error));
  }, []);

 return (
    <div className="App">
      <header>
        <h1>Apple Shop</h1>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/profile">Profile</Link>
            </li>
          </ul>
        </nav>
      </header>
      <Routes>


        <Route path="profile/:id/edit" element={<EditHiredPeople hiredPeople = {hiredPeople} people = {people} setHiredPeople={setHiredPeople}/>} />

        <Route path="/" element={<Dashboard hiredPeople={hiredPeople} people={people} setHiredPeople={setHiredPeople} />} />
        <Route path="/profile/:id" element={<PersonProfile people={people} setHiredPeople={setHiredPeople} hiredPeople={hiredPeople}/>} />
          
        <Route path="/profile" element={<PersonProfile />}/>

      </Routes>
    </div>
  );
}
