import { useState } from "react";
import "./App.css";
import Dashboard from "./pages/Dashboard";
import { Route, Routes } from "react-router-dom";

export default function App() {
    const [hiredPeople, setHiredPeople] = useState([]);

    return (
        <>
            <header>
                <h1>Hire Your Team</h1>
                <nav>
                    <ul>
                        <li>Dashboard</li>
                    </ul>
                </nav>
                <Routes>
                    <Route
                        path="/"
                        element={<Dashboard hiredPeople={hiredPeople} />}
                    />
                </Routes>
            </header>
        </>
    );
}
