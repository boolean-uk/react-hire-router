import { useEffect, useState } from "react";
import PeopleList from "./components/PeopleList";
import { useLoaderData } from "react-router-dom";

function Dashboard({ hiredPeople = [] }) {
	const loadedData = useLoaderData();

	return (
		<main className="dashboard-layout">
			<section>
				<h2>People</h2>
				<PeopleList people={loadedData} />
			</section>
			<section>
				<h2>Hired People</h2>
				<PeopleList people={hiredPeople} />
			</section>
		</main>
	);
}

export default Dashboard;
