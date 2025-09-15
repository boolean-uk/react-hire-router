import { useState, useEffect } from 'react';
import { Routes, Route } from "react-router-dom";
import './App.css';
import PeopleList from './pages/Dashboard/components/PeopleList';
import Profile from './pages/PersonProfile/components/Profile';

export default function App() {
  const [hiredPeople, setHiredPeople] = useState([]);
  const [people, setPeople] = useState([]);

  const url = "https://randomuser.me/api/?results=50";

  useEffect(() => {
    if(people.length === 0){
      fetch(url)
        .then(res => res.json())
        .then(data => setPeople(data.results));
    }
  }, [people]);

  return (
    <>
      <header>
        <h1>Hire Your Team</h1>
      </header>
      <main>
        <Routes>
          <Route path="/" element={
            <table>
              <thead>
                <tr>
                  <th>All People</th>
                  <th>Hired People</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td valign="top">
                    <PeopleList people={people} />
                  </td>
                  <td valign="top">
                    <PeopleList people={hiredPeople} />
                  </td>
                </tr>
              </tbody>
            </table>
          }/>
          <Route path="/view/:id" element={
            <Profile people={people} hiredPeople={hiredPeople} 
            setHiredPeople={setHiredPeople}/>}
          />
        </Routes>
      </main>
    </>
  );
}
