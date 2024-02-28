import PropTypes from "prop-types";
import PeopleList from "./components/PeopleList";

function Dashboard({ hiredPeople, people }) {
  const notHiredPeople = people.filter(
    (ar) => !hiredPeople.find((rm) => rm.id === ar.id)
  );

  return (
    <main className="dashboard-layout">
      <section>
        <h2>People</h2>
        <PeopleList people={notHiredPeople} />
      </section>
      <section>
        <h2>Hired People</h2>
        <PeopleList people={hiredPeople} />
      </section>
    </main>
  );
}

Dashboard.propTypes = {
  hiredPeople: PropTypes.array,
  people: PropTypes.array,
};

export default Dashboard;
