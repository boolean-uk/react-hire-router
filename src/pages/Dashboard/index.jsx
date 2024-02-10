import PeopleList from './components/PeopleList'
import HiredPeopleList from './components/HiredPeopleList'

function Dashboard() {
  return (
    <main className="dashboard-layout">
      <section>
        <h2>People</h2>
        <PeopleList/>
      </section>
      <section>
        <h2>Hired People</h2>
        <HiredPeopleList/>
      </section>
    </main>
  )
}

export default Dashboard
