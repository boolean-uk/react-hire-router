import { useEffect, useState } from "react"
import "./styles.css"
import Dashboard from "./pages/Dashboard/index"
import HireForm from "./pages/PersonProfile/index"

import { Routes, Route } from "react-router-dom"
import { useLocation } from "react-router-dom"

export default function App() {
  const [hiredPeople, setHiredPeople] = useState([]);
  const location = useLocation();

  useEffect(() => {
    if (location.state && location.state.person) {
 
      setHiredPeople(prevHiredPeople => [...prevHiredPeople, location.state.person]);
    }
  }, [location.state]);

  console.log(hiredPeople)

  return (
    <>
      <header>
        <h1>Hire Your Team</h1>
        <nav>
          <ul>
            <li>Dashboard</li>
            <Routes>
              <Route
                path='/'
                element={
                  <Dashboard
                    hiredPeople={hiredPeople}

                  />}
              />
              <Route
                path='/view/:id'
                element={
                  <HireForm


                  />}
              />

            </Routes>
          </ul>
        </nav>





      </header>
    </>
  )
}
