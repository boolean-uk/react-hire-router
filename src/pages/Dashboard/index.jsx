import PeopleList from "./components/PeopleList";
import PropTypes from "prop-types";

function Dashboard(props) {
  const { hiredPeople, people } = props;

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
Dashboard.propTypes = {
  hiredPeople: PropTypes.array,
  people: PropTypes.array,
};

export default Dashboard;
