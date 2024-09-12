import PeopleList from './components/PeopleList'

function Dashboard(props) {
  const { hiredPeople, peopleData } = props
  console.log(peopleData)

  return (
    <main className="dashboard-layout">
      <section>
        <h2>People</h2>
        <PeopleList people={peopleData} isInHiredField={false} />
      </section>
      <section>
        <h2>Hired People</h2>
        <PeopleList people={hiredPeople} isInHiredField={true} />
      </section>
    </main>
  );
}

export default Dashboard
