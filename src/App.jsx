import { useState, useEffect } from 'react'
import './App.css'
import { Link, Route, Routes, useNavigate } from 'react-router-dom';
import Dashboard from './pages/Dashboard';
import PersonProfile from './pages/PersonProfile';

export default function App() {
  const url = "https://randomuser.me/api/?results=50";
  const [hiredPeople, setHiredPeople] = useState([]);
  const [people, setPeople] = useState([]);

  const [user, setUser] = useState({
    login: {uuid: ""}});

  const navigate = useNavigate()

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(url);
      const jsonData = await response.json();
      setPeople(jsonData.results);
    };
    fetchData();
  }, []);

  const goToProfile = (user) => (
    setUser(user)
  )
  
  useEffect(() => {
    navigate(`/view/${user.login.uuid}`)
  }, [user])

  const hirePerson = (wage) => {
    user.wage = wage;
    setHiredPeople(prevHiredPeople => [...prevHiredPeople, user]);
  }

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
        <main>
          <Routes>
            <Route path="/" element={<Dashboard hiredPeople={hiredPeople} people={people} goToProfile={goToProfile}/>} />
            <Route path="/view/:id" element={<PersonProfile person={user} hirePerson={hirePerson} navigate={navigate}/>}/>
          </Routes>
        </main>
      </header>
    </>
  )
}
