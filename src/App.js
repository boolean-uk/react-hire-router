import { useEffect, useState } from "react";
import "./styles.css";
import { Link, Route, Routes } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import PersonProfile from "./pages/PersonProfile";


export default function App() {
    const [hiredPeople, setHiredPeople] = useState([]);
    const [people, setPeople] = useState([]);

    async function getData() {
        const response = await fetch("https://randomuser.me/api/?results=5");
        const jsonResponse = await response.json();
        const modifiedPeople = jsonResponse.results.map((person) => ({
            ...person,
            isHired: false,
        }));

        setPeople(modifiedPeople);
    }

    useEffect(() => {
        getData();
    }, []);

    return (
        <div className="App">
            <header>
                <h1>Hire Your Team</h1>
                <nav>
                    <Link to="/">Home</Link>
                </nav>
            </header>
            <Routes>
                <Route
                    path="/"
                    element={
                        <Dashboard
                            hiredPeople={hiredPeople}
                            setHiredPeople={setHiredPeople}
                            people={people}
                            setPeople={setPeople}
                        />
                    }
                ></Route>
                <Route
                    path="/view/:id"
                    element={
                        <PersonProfile
                            hiredPeople={hiredPeople}
                            setHiredPeople={setHiredPeople}
                            editMode={false}
                            people={people}
                            setPeople={setPeople}
                        />
                    }
                />
                <Route
                    path="/edit/:id"
                    element={
                        <PersonProfile
                            hiredPeople={hiredPeople}
                            setHiredPeople={setHiredPeople}
                            editMode={true}
                            people={people}
                            setPeople={setPeople}
                        />
                    }
                />
            </Routes>
        </div>
    );
}
