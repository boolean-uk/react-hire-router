import { useEffect, useState } from "react";
import PeopleList from "./components/PeopleList";
import PropTypes from "prop-types";

function Dashboard(props) {
  const { hiredPeople, people, onHire } = props;
  const [unhiredPeople, setUnhiredPeople] = useState([]);

  useEffect(() => {
    setUnhiredPeople(
      people.filter(
        (p) => !hiredPeople.some((h) => h.login.uuid === p.login.uuid)
      )
    );
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [hiredPeople, people]);

  return (
    <main className="dashboard-layout">
      <section>
        <h2>People</h2>
        <PeopleList people={unhiredPeople} onHire={onHire} />
      </section>
      <section>
        <h2>Hired People</h2>
        <PeopleList people={hiredPeople} onHire={onHire} />
      </section>
    </main>
  );
}

Dashboard.propTypes = {
  hiredPeople: PropTypes.array.isRequired,
  people: PropTypes.array.isRequired,
  onHire: PropTypes.func.isRequired,
};

export default Dashboard;
