import PeopleList from "./components/PeopleList";
import PropTypes from "prop-types";
function Dashboard({ hiredPeople, people }) {
	return (
		<main className="dashboard-layout">
			<section>
				<h2>People</h2>
				<PeopleList people={people} />
			</section>
			<section>
				<h2>Hired People</h2>
				<PeopleList people={hiredPeople} />
			</section>
		</main>
	);
}

export default Dashboard;

Dashboard.propTypes = {
	hiredPeople: PropTypes.array,
	people: PropTypes.array,
};
