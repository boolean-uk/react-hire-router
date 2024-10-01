import { useEffect, useState } from 'react';
import './App.css';
import PeopleList from './pages/Dashboard/components/PeopleList';
import { Route, Routes, Link } from 'react-router-dom';
import HireForm from './pages/PersonProfile/index';
import Dashboard from './pages/Dashboard/index';
import PersonProfile from './pages/PersonProfile/index';
import EditForm from './pages/PersonProfile/components/EditForm'

export default function App() {
  const [hiredPeople, setHiredPeople] = useState([]);
  const [people, setPeople] = useState([]);
  const [wage, setWage] = useState(0);

  useEffect(() => {
    fetch('https://randomuser.me/api/?results=50')
      .then((res) => res.json())
      .then((json) => {
        const data = json.results.map((item, id) => ({ ...item, id: id }));
        setPeople(data);
      });
  }, []);
  console.log(people);
  return (
    <>
      <header>
        <h1>Hire Your Team</h1>
      </header>

      <Routes>
        <Route
          path='/'
          element={<Dashboard hiredPeople={hiredPeople} people={people} />}
        />

        <Route
          path='/view/:id'
          element={
            <PersonProfile
              people={people}
              setHiredPeople={setHiredPeople}
              hiredPeople={hiredPeople}
              wage={wage}
              setWage={setWage}
            />
          }
        />
        <Route
          path='/edit/:id'
          element={
            <EditForm
              people={people}
              setHiredPeople={setHiredPeople}
              hiredPeople={hiredPeople}
              wage={wage}
              setWage={setWage}
            />
          }
        />
      </Routes>
    </>
  );
}
