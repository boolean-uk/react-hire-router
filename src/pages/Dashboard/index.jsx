import { useState } from "react";
import PeopleList from "./components/PeopleList";
import PropTypes from "prop-types";

function Dashboard(props) {
  console.log("Dashboard props: ", props);
  const { peopleList, hiredPeople } = props;
  //console.log("people: ", people);
  //console.log("hiredPeople in dachboard ", hiredPeople);
  //const [people, setPeople] = useState([]);

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

Dashboard.propTypes = {
  peopleList: PropTypes.array,
  hiredPeople: PropTypes.array,
};
export default Dashboard;
