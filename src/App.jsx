import './App.css';

import { useState, useEffect } from 'react';
import { Routes, Route, Link } from 'react-router-dom';

import Dashboard from './pages/Dashboard';
import PersonProfile from './pages/PersonProfile';

export default function App() {
	const [hiredPeople, setHiredPeople] = useState([]);
	const [people, setPeople] = useState([]);
	const apiURL = 'https://randomuser.me/api/?results=50';

	useEffect(() => {
		const fetchData = async () => {
			const response = await fetch(apiURL);
			const jsonData = await response.json();
			setPeople(jsonData.results);
		};
		fetchData();
	}, []);

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
			</header>

			<Routes>
				<Route
					path="/"
					element={<Dashboard hiredPeople={hiredPeople} people={people} />}
				/>
				<Route
					path="/view/:id"
					element={
						<PersonProfile people={people} setHiredPeople={setHiredPeople} />
					}
				/>
			</Routes>
		</>
	);
}