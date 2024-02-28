//randomuser.me/api/import { useEffect, useState } from "react";
import "./App.css";
import React, { useEffect, useState } from "react";
import { Route, Link, Routes } from "react-router-dom";

import Dashboard from "./pages/Dashboard/index.jsx";
import PersonProfile from "./pages/PersonProfile/index.jsx";

export default function App() {
  const URL = `https://randomuser.me/api`;
  const [hiredPeople, setHiredPeople] = useState([]);
  const [peopleList, setPeopleList] = useState([]);

  useEffect(() => {
    console.log("Running useEffect in App()");
    const fetchData = async () => {
      try {
        const req = await fetch(URL + "?results=50");
        const res = await req.json();
        setPeopleList(res.results);
      } catch (er) {
        console.log(`Obs!!! Something went wrong fetching ${URL}, ${er}`);
      }
    };
    fetchData();
  }, [URL]);

  const hirePerson = (person) => {
    setHiredPeople((prevHiredPerson) => [...prevHiredPerson, person]);
  };
  console.log("PeopleList: ", peopleList);

  return (
    <>
      <header>
        <h1>Hire Your Team</h1>
        <nav>
          <ul>
            <li>
              <Link to="/">Dashbord</Link>
            </li>
          </ul>
        </nav>
      </header>
      <Routes>
        <Route
          path="/"
          element={
            <Dashboard
              //hiredPeople={hiredPeople}
              peopleList={peopleList}
              onHire={hirePerson}
            />
          }
        ></Route>
      </Routes>
    </>
  );
}
