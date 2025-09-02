import PeopleList from './components/PeopleList'

function Dashboard({ hiredPeople, people, goToProfile}) {

  return (
    <main className="dashboard-layout">
      <section>
        <h2>People</h2>
        <PeopleList people={people} goToProfile={goToProfile}/>
      </section>
      <section>
        <h2>Hired People</h2>
        <PeopleList people={hiredPeople} goToProfile={goToProfile}/>
      </section>
    </main>
  )
}

export default Dashboard
