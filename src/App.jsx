import { useState, useEffect } from "react";
import { Route, Routes, Link  } from "react-router-dom";
import "./App.css";
import Dashboard from "./pages/Dashboard";
import PersonProfile from "./pages/PersonProfile";

export default function App() {
  const [hiredPeople, setHiredPeople] = useState([]);
  const [peopleData, setPeople] = useState([]);

  // useEffect(() => {
  //   console.log("USEEFFECT", hiredPeople);
  // }, [hiredPeople]);

  function hirePerson(person,wage){
    const udpatedPerson = person
    udpatedPerson.wage = wage
    setHiredPeople([...hiredPeople.filter((p)=>p!==person), udpatedPerson])
    setPeople(peopleData.filter((p)=>p!==person))
    // setUserData({...userData, timeSpent: userData.timeSpent.filter((checks) => checks !== value)}, console.log("userdata",userData.timeSpent))
  }   

  useEffect(() => {
    fetch("https://randomuser.me/api/?results=50")
      .then((res) => res.json())
      .then((data) => setPeople(data.results));
  }, []);

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
        <Route path="/view/:id" element={<PersonProfile peopleData={peopleData} hirePerson={hirePerson}/>} />
        <Route path="/edit/:id" element={<PersonProfile peopleData={hiredPeople} hirePerson={hirePerson}/>} />
        <Route
          path="/"
          element={<Dashboard hiredPeople={hiredPeople} peopleData={peopleData} />}
        />
      </Routes>
    </>
  );
}
