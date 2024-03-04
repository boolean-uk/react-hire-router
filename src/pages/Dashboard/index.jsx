import PeopleList from "./components/PeopleList";

function Dashboard(props) {
  const { hiredPeople, people, setHiredPeople } = props;

  const hirePerson = (person) => {
    setHiredPeople(...hiredPeople, person);
  };

  return (
    <main className="dashboard-layout">
      <section>
        <h2>People</h2>
        <PeopleList people={people} />
      </section>
      <section>
        <h2>Hired People</h2>
        <PeopleList
          people={hiredPeople}
          hirePerson={hirePerson}
          hiredPeople={hiredPeople}
          setHiredPeople={setHiredPeople}
        />
      </section>
    </main>
  );
}

export default Dashboard;
