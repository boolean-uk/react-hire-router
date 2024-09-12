import "./App.css";
import { useEffect, useState } from "react";
import { Link, Route, Routes } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import PersonProfile from "./pages/PersonProfile/index";

export default function App() {
    const [hiredPeople, setHiredPeople] = useState([]);
    const [people, setPeople] = useState([]);

    const getData = async () => {
        const response = await fetch("https://randomuser.me/api/?results=50");
        const data = await response.json();
        for (let i = 0; i < data.results.length; i++) {
            data.results[i].id = i;
        }
        console.log(data.results);
        setPeople([...data.results]);
    };

    useEffect(() => {
        getData();
    }, []);

    return (
        <div className="app">
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
                <Route
                    path="/"
                    element={
                        <Dashboard hiredPeople={hiredPeople} people={people} />
                    }
                />
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
            </Routes>
        </div>
    );
}
