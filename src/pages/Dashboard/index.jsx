
import { Link } from "react-router-dom";
import PeopleList from "./components/PeopleList";

function Dashboard({ users, hiredPeople }) {
  return (
    <div>
      <h1>Hire Your Team</h1>
      <nav>
        <ul>
          <li><Link to="/">Dashboard</Link></li>
        </ul>
      </nav>
      <main className="dashboard-layout">
        <section>
          <h2>People</h2>
          <PeopleList people={users} />
        </section>
        <section>
          <h2>Hired People</h2>
          <PeopleList people={hiredPeople} />
        </section>
      </main>
    </div>
  );
}

export default Dashboard;

