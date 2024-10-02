import { useEffect } from "react";
import { Link } from "react-router-dom";
import PeopleList from "./components/PeopleList";
import PropTypes from "prop-types";

function Dashboard({ people, setPeople, hiredPeople }) {
  useEffect(() => {
    if (people.length === 0) {
      fetch("https://randomuser.me/api/?results=50")
        .then((response) => response.json())
        .then((data) => setPeople(data.results));
    }
  }, [people, setPeople]);

  return (
    <div>
      <h2>Available People</h2>
      <PeopleList people={people} />

      <h2>Hired People</h2>
      <ul>
        {hiredPeople.map((person, index) => (
          <li key={index}>
            {person.name.first} {person.name.last}
          </li>
        ))}
      </ul>
    </div>
  );
}

Dashboard.propTypes = {
  people: PropTypes.array.isRequired,
  setPeople: PropTypes.func.isRequired,
  hiredPeople: PropTypes.array.isRequired,
};

export default Dashboard;
