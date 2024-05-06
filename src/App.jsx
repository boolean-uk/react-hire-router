import { useState } from "react";
import "./App.css";
import {
	NavLink,
	Outlet,
	Route,
	Routes,
	createRoutesFromElements,
} from "react-router-dom";

export default function App() {
	const [hiredPeople, setHiredPeople] = useState([]);

	return (
		<>
			<header>
				<h1>Hire Your Team</h1>
				<nav>
					<ul>
						<li>
							<NavLink to={"/"}>Dashboard</NavLink>
						</li>
					</ul>
				</nav>
			</header>
			<Outlet></Outlet>
		</>
	);
}
