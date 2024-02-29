import PeopleList from "./components/PeopleList";
import PropTypes from "prop-types";

function Dashboard(props) {
  const { peopleList, hiredPeople } = props;

  Dashboard.propTypes = {
    peopleList: PropTypes.array,
    hiredPeople: PropTypes.array,
  };
  // The Dashboard component receives the peopleList and hiredPeople as props
  return (
    <main className="dashboard-layout">
      <section>
        <h2>People</h2>
        <PeopleList people={peopleList} />
      </section>
      <section>
        <h2>Hired People</h2>
        <PeopleList people={hiredPeople} />
      </section>
    </main>
  );
}

export default Dashboard;
