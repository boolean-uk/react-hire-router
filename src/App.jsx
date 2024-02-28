import { useEffect, useState } from "react";
import "./App.css";
import Dashboard from "./pages/Dashboard";
import { Routes, Route } from "react-router-dom";
import PersonProfile from "./pages/PersonProfile";

export default function App() {
  const [hiredPeople, setHiredPeople] = useState([]);
  const [people, setPeople] = useState([]);

  useEffect(() => getPeopleFromApi(), []);

  const giveId = (peopleList) => {
    peopleList.forEach((element, id) => {
      element.id = id;
    });
  };

  function getPeopleFromApi() {
    const url = "https://randomuser.me/api/?results=50";
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        giveId(data.results);
        console.log(data.results);
        setPeople(data.results);
      });
  }

  return (
    <>
      <header>
        <h1>Hire Your Team</h1>
        <nav>
          <ul>
            <li>Dashboard</li>
            <Routes>
              <Route
                path="/"
                element={
                  <Dashboard
                    hiredPeople={hiredPeople}
                    people={people}
                    setPeople={setPeople}
                  />
                }
              />
              <Route
                path="/view/:id"
                element={
                  <PersonProfile
                    people={people}
                    setHiredPeople={setHiredPeople}
                  />
                }
              />
              <Route
                path="/view/:id/edit"
                element={
                  <PersonProfile
                    people={people}
                    setHiredPeople={setHiredPeople}
                  />
                }
              />
            </Routes>
          </ul>
        </nav>
      </header>
    </>
  );
}
