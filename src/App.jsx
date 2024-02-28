import { useEffect, useState } from "react";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import Dashboard from "./pages/Dashboard/index.jsx";
import PersonProfile from "./pages/PersonProfile/index.jsx";
export default function App() {
  const [hiredPeople, setHiredPeople] = useState([]);
  const [allPeople, setAllPeople] = useState([])
  const [people, setPeople] = useState([])

  useEffect(() => {
    console.log('people', people);
    if (people.length !== 0) {
      return;
    }
    fetch("https://randomuser.me/api/?results=50")
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        setPeople(data.results);
        //setAllPeople(data.results)
      });
  }, []);

  const newHire = (person) => {
    const filteredPeople = people.filter((p) => p.login.uuid !== person.login.uuid);
    setPeople(filteredPeople);
    setHiredPeople([...hiredPeople, person]);
  };

  const newHireEdit = (updatedPerson) => {
    const updatedPeople = hiredPeople.map(person => {
      if (person.id === updatedPerson.id) {
        return { ...person, ...updatedPerson };
      }
      return person;
    });
  
    setHiredPeople(updatedPeople);
  }
  

  return (
    <>
      <header>
        <h1>Hire Your Team</h1>
      </header>
      <nav>
        <ul>
          <li>Dashboard</li>
          <Routes>
            <Route path="/" element={<Dashboard hiredPeople={hiredPeople} people={people}/>} />
            <Route path="/view/:id" element={<PersonProfile allPeople={people} newHire={newHire}/>} />
            <Route path="/view/:id/edit" element={<PersonProfile allPeople={hiredPeople} newHire={newHireEdit}/>} />
          </Routes>
        </ul>
      </nav>
    </>
  );
}
