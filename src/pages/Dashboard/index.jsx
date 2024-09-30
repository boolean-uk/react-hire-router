import PeopleList from "./components/PeopleList";

export default function Dashboard({ people, hiredPeople, setHiredPeople }) {
  return (
    <main className="dashboard-layout">
      <section>
        <h2>People</h2>
        <PeopleList people={people} editable={false} />
      </section>
      <section>
        <h2>Hired People</h2>
        <PeopleList
          people={hiredPeople}
          setPeople={setHiredPeople}
          editable={true}
        />
      </section>
    </main>
  );
}
