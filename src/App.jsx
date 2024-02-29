import { useState, useEffect } from "react";
import { Route, Link, Routes } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import PersonProfile from "./pages/PersonProfile";
import "./App.css";

export default function App() {
  const [hiredPeople, setHiredPeople] = useState([]);
  const [peopleList, setPeopleList] = useState([]);

  // Function to hire a person
  const handleHirePerson = (person) => {
    setHiredPeople((prevHiredPerson) => [...prevHiredPerson, person]);
  };

  // Fetching data from the API
  useEffect(() => {
    fetch("https://randomuser.me/api/?results=5")
      .then((response) => response.json())
      .then((data) => setPeopleList(data.results));
  }, []);
  return (
    <>
      <header>
        <h1>Hire Your Team</h1>
        <nav>
          <ul>
            <li>
              {/* Add a link to the dashboard page */}
              <Link to="/">Dashbord</Link>
            </li>
          </ul>
        </nav>
      </header>
      <Routes>
        <Route
          path="/"
          element={
            <Dashboard hiredPeople={hiredPeople} peopleList={peopleList} />
          }
        ></Route>
        <Route
          path="/view/:id"
          element={
            <PersonProfile
              peopleList={peopleList}
              HirePerson={handleHirePerson}
            />
          }
        ></Route>
      </Routes>
    </>
  );
}
