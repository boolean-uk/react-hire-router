import { useState, useEffect } from 'react'
import './App.css'
import { Link, Route, Routes, useNavigate } from "react-router-dom";
import Dashboard from './pages/Dashboard';
import PersonProfile from './pages/PersonProfile';
import EditWage from './pages/PersonProfile/components/EditWage';


export default function App() {
  // eslint-disable-next-line no-unused-vars
  const [hiredPeople, setHiredPeople] = useState([])
  const [people, setPeople] = useState([]);
  const url = "https://randomuser.me/api/?results=50";
  const navigate = useNavigate();
  // eslint-disable-next-line no-unused-vars

  useEffect( () => {
    const fetchData = async () => {
      const response = await fetch(url);
      const jsonData = await response.json();
      setPeople(jsonData.results);
    }
    fetchData();
  }, []);

  const handleSubmit = (person, wage) => {
    if (!hiredPeople.find((hiredPerson) => hiredPerson.login.uuid === person.login.uuid)){
    const hiredPerson = {...person, wage};
   
      setHiredPeople((prevHired) => [...prevHired, hiredPerson]);
    
    }
    navigate("/");
  }

  const handleEdit = (id) => {
    navigate(`/edit/${id}`);
  };

  const handleUpdateWage = (id, newWage) => {
    setHiredPeople((prevHired) => {
      const updatedPeople = prevHired.map((person) =>
        person.login.uuid === id ? { ...person, wage: newWage } : person
      );
      return updatedPeople;
    });
    navigate('/');
  };
  
  return (
    <>
      <header>
        <h1>Hire Your Team</h1>
        <nav>
          <ul>
            <li>
              <Link to = "/">Dashboard</Link>
            </li>
          </ul>
        </nav>
        <Routes>
        <Route path="/" element={<Dashboard hiredPeople = {hiredPeople} people ={people} handleEdit={handleEdit} />} />
        <Route path="/personProfile/:id" element={<PersonProfile people={people} handleSubmit = {handleSubmit} />} />
        <Route path="/edit/:id" element={<EditWage hiredPeople={hiredPeople} handleUpdateWage={handleUpdateWage} />}/>

      </Routes>
      </header>
    </>
  )
}
