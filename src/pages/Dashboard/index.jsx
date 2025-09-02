/* eslint-disable react/prop-types */
import PeopleList from './components/PeopleList'

function Dashboard(props) {

  const { hiredPeople,people } = props

  return (
    <div>
    <h1>Dashboard</h1>
    <main className="dashboard-layout">
      <section>
        <h2>People</h2>
        <PeopleList people={people} />
      </section>
      <section>
        <h2>Hired People</h2>
        <PeopleList people={hiredPeople} />
      </section>
    </main>
    </div>
  )
}

export default Dashboard
