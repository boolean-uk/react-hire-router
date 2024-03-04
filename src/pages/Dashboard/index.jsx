import { useEffect } from "react";
import PeopleList from "./components/PeopleList";

import PropTypes from "prop-types";

function Dashboard(props) {
  const { people, hiredPeople, setPeople } = props;

  useEffect(() => {
    // Remove people from the list of available people if they are hired
    const availablePeople = people.filter(
      (person) => !hiredPeople.includes(person)
    );
    setPeople(availablePeople);
  }, [hiredPeople]);

  return (
    <main className="dashboard-layout">
      <section>
        <h2>People</h2>
        <PeopleList people={people} />
      </section>
      <section>
        <h2>Hired People</h2>
        <PeopleList people={hiredPeople} isHiredList={true} />
      </section>
    </main>
  );
}

Dashboard.propTypes = {
  people: PropTypes.array.isRequired,
  hiredPeople: PropTypes.array.isRequired,
  setPeople: PropTypes.func.isRequired,
};

export default Dashboard;
