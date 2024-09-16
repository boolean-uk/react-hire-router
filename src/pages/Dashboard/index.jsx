/* eslint-disable react/prop-types */
import PeopleList from "./components/PeopleList";


function Dashboard(props) {
  const { hiredPeople, people } = props;


  return (
    <main className="dashboard-layout">
      <section>
        <h2>People</h2>
        <PeopleList people={people} onHire={props.onHire} hired={false}/>
      </section>
      <section>
        <h2>Hired People</h2>
        <PeopleList people={hiredPeople} hired={true}/>
      </section>
  
    </main>
  );
}

export default Dashboard;
