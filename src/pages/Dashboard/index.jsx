import PeopleList from "./components/PeopleList";
import PropTypes from "prop-types";

function Dashboard(props) {
  const { hiredPeople, people } = props;

  return (
    <main className="dashboard-layout">
      <section>
        <h2 className="peepsHeaders">People</h2>
        <PeopleList people={people} />
      </section>

      <section>
        <h2 className="peepsHeaders">Hired People</h2>
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
