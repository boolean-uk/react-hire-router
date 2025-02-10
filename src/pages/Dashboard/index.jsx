import { useState, useEffect } from "react";
import PropTypes from "prop-types";
import PeopleList from "./components/PeopleList";

function Dashboard(props) {
  const { hiredPeople } = props;

  const [people, setPeople] = useState([]);
  const url = "https://randomuser.me/api/?results=50&seed=foobar";

  useEffect(() => {
    const fetchData = async () =>
      await fetch(url)
        .then((response) => response.json())
        .then((data) => {
          setPeople(data.results);
        });

    fetchData();
  }, []);

  return (
    <main className="dashboard-layout">
      <section>
        <header>
          <h1>Hire Your Team</h1>
          <nav>
            <ul>
              <li>Dashboard</li>
            </ul>
          </nav>
        </header>
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
};

export default Dashboard;
