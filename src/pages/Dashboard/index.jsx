/* eslint-disable react/prop-types */
import PeopleList from './components/PeopleList'

function Dashboard(props) {
  const { people, hiredPeople } = props

  return (
    <main className="dashboard-layout">
      <section>
        <h2>Not employees</h2>
        <PeopleList people={people} />
      </section>
      <section>
        <h2>Employees</h2>
        <PeopleList people={hiredPeople} />
      </section>
    </main>
  )
}

export default Dashboard
