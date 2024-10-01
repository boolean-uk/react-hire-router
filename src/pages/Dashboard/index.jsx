import PeopleList from "./components/PeopleList";

function Dashboard({ hired, people }) {
  const hiredPeople = hired;
  const notHiredPeople = people.filter(
    (person) =>
      !hiredPeople.some(
        (hiredPerson) => hiredPerson.login.uuid === person.login.uuid
      )
  );

  console.log(people);

  return (
    <main className="dashboard-layout">
      <section>
        <h2>People</h2>
        <PeopleList person={notHiredPeople} />
      </section>
      <section>
        <h2>Hired People</h2>
        <PeopleList person={hiredPeople} />
      </section>
    </main>
  );
}

export default Dashboard;
