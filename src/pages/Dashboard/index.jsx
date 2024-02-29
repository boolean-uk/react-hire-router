/* eslint-disable react/prop-types */
import PeopleList from './components/PeopleList'

function Dashboard(props) {
  const { applicants, hiredPeople } = props

  return (
    <main className="dashboard-layout">
      <section>
        <h2>Applicants</h2>
        <PeopleList people={applicants} />
      </section>
      <section>
        <h2>Employees</h2>
        <PeopleList people={hiredPeople} />
      </section>
    </main>
  )
}

export default Dashboard
