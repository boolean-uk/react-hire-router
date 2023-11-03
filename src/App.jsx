import { useState } from "react";
import "./App.css";
import Dashboard from "./pages/Dashboard";
import { Link, Route, Routes } from "react-router-dom";
import PersonProfile from "./pages/PersonProfile";

export default function App() {
    const [hiredPeople, setHiredPeople] = useState([]);

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
                    <Route path="/view/:id" element={<PersonProfile />} />
                </Routes>
            </header>
        </>
    );
}
