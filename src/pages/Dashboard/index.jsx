import PeopleList from './components/PeopleList'

function Dashboard(props) {
  const { people, hiredPeople } = props

  return (
    <main className="dashboard-layout">
      <section>
        <h2>People</h2>
        <PeopleList people={people} isHired={false} />
      </section>
      <section>
        <h2>Hired People</h2>
        <PeopleList people={hiredPeople} isHired={true} />
      </section>
    </main>
  )
}

export default Dashboard
