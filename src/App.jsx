import { useEffect, useState } from "react";
import { Routes, Route, Link } from "react-router-dom";
import axios from "axios";

import "./App.css";

import Dashboard from "./pages/Dashboard";
import PersonProfile from "./pages/PersonProfile";

const instance = axios.create({
  baseURL: "https://randomuser.me/api",
  params: {
    results: 50,
  },
});

export default function App() {
  const [people, setPeople] = useState([]);
  const [hiredPeople, setHiredPeople] = useState([]);

  useEffect(() => {
    async function obtainApplicantsAxios() {
      try {
        const {
          data: { results },
        } = await instance.get();
        const output = await results.map((entry, index) => {
          entry.id.id = index + 1;
          return entry;
        });
        return setPeople(output);
      } catch (error) {
        console.error(error);
      }
    }

    obtainApplicantsAxios();
  }, []);

  return (
    <div className="container h-screen">
      <header className="grid gap-4 p-4 text-teal-500">
        <h1 className="text-6xl font-semibold">Hire Your Team</h1>
        <nav>
          <ul className="flex text-slate-50">
            <li className="rounded-lg bg-teal-500 p-2">
              <Link to="/">Dashboard</Link>
            </li>
          </ul>
        </nav>
      </header>

      <Routes>
        <Route
          path="/view/:id"
          element={
            <PersonProfile
              people={people}
              hiredPeople={hiredPeople}
              setHiredPeople={setHiredPeople}
            />
          }
        />
        <Route
          path="/"
          element={<Dashboard hiredPeople={hiredPeople} people={people} />}
        />
      </Routes>
    </div>
  );
}
