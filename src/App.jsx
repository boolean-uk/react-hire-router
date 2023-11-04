import { useState } from "react";
import "./App.css";
import Dashboard from "./pages/Dashboard";
import { Link, Route, Routes } from "react-router-dom";
import PersonProfile from "./pages/PersonProfile";

export default function App() {
    const [hiredPeople, setHiredPeople] = useState([]);

    const addHiredPeople = (people) => {
        const findElement = hiredPeople.find(
            (item) => item.login.uuid === people.login.uuid
        );

        setHiredPeople(
            findElement
                ? hiredPeople.map((item) =>
                      item.login.uuid === people.login.uuid ? people : item
                  )
                : [...hiredPeople, people]
        );
    };

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
                <Routes>
                    <Route
                        path="/"
                        element={<Dashboard hiredPeople={hiredPeople} />}
                    />
                    <Route
                        path="/view/:id"
                        element={
                            <PersonProfile addHiredPeople={addHiredPeople} />
                        }
                    />
                </Routes>
            </header>
        </>
    );
}
