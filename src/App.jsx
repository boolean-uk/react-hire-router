import { useState, useEffect } from "react";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import Dashboard from "./pages/Dashboard/index.jsx";
import PersonProfile from "./pages/PersonProfile/index.jsx";
import { NotFound } from "./pages/NotFound.jsx";
export default function App() {
	const [hiredPeople, setHiredPeople] = useState([]);
	const [people, setPeople] = useState([]);

	useEffect(() => {
		const storedPeople = localStorage.getItem("people");
		if (storedPeople) {
			setPeople(JSON.parse(storedPeople));
		} else {
			fetch("https://randomuser.me/api/?results=50")
				.then((response) => response.json())
				.then((data) => {
					setPeople(data.results);
					localStorage.setItem("people", JSON.stringify(data.results));
				});
		}
	}, []);

	function addHiredPerson(person) {
		const personIndex = hiredPeople.findIndex(
			(p) => p.login.uuid === person.login.uuid
		);
		if (personIndex !== -1) {
			if (hiredPeople[personIndex].wage !== person.wage) {
				const updatedHiredPeople = [...hiredPeople];
				updatedHiredPeople[personIndex].wage = person.wage;
				setHiredPeople(updatedHiredPeople);
			}
		} else {
			setHiredPeople([...hiredPeople, person]);
		}
	}

	return (
		<>
			<header>
				<h1>Hire Your Team</h1>
				<nav>
					<ul>
						<li>Dashboard</li>
					</ul>
				</nav>
			</header>
			<Routes>
				<Route
					path="/"
					element={<Dashboard hiredPeople={hiredPeople} people={people} />}
				/>
				<Route
					path="/view/:id"
					element={
						<PersonProfile people={people} addHiredPerson={addHiredPerson} />
					}
				/>
				<Route path="*" element={<NotFound />} />
			</Routes>
		</>
	);
}
