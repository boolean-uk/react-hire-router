import PropTypes from "prop-types";
import { useEffect, useState } from "react";
import PeopleList from "./components/PeopleList";

function Dashboard({ hiredPeople }) {
  const [people, setPeople] = useState([]);

  useEffect(() => {
    fetch("https://randomuser.me/api/?results=50")
      .then((response) => response.json())
      .then((data) => {
        setPeople(data.results);
      });
  }, []);

  return (
    <main className="dashboard-layout">
      <section>
        <h2>People</h2>
        <PeopleList people={people} />
      </section>
      <section>
        <h2>Hired People</h2>
        <PeopleList people={hiredPeople} isHired />
      </section>
    </main>
  );
}

Dashboard.propTypes = {
  hiredPeople: PropTypes.array.isRequired,
};

export default Dashboard;
