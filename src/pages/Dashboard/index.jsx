import PeopleList from './components/PeopleList'

function Dashboard() {
  return (
    <main className="dashboard-layout">
      <section>
        <h2>People</h2>
        <PeopleList/>
      </section>
      <section>
        <h2>Hired People</h2>
        <PeopleList/>
      </section>
    </main>
  )
}

export default Dashboard
