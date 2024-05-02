import PeopleList from './components/PeopleList'

function Dashboard({ hiredPeople, people }) {
  const editButton = true
  return (
    <main className="dashboard-layout">
      <section>
        <h2>People</h2>
        <PeopleList people={people} />
      </section>
      <section>
        <h2>Hired People</h2>
        <PeopleList people={hiredPeople} editButton={editButton}/>
      </section>
    </main>
  )
}

export default Dashboard
