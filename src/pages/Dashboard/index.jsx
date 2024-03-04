import PeopleList from './components/PeopleList'

function Dashboard(props) {
  const { hiredPeople, people } = props

  return (
    <main className="dashboard-layout">
      <section>
        <h2>People</h2>
        <ul>
          <li>
          <PeopleList people={people.results} />
          </li>
        </ul>
      </section>
      <section>
        <h2>Hired People</h2>
        {<PeopleList people={hiredPeople} />}
      </section>
    </main>
  )
}

export default Dashboard

/*
  <main>
    <div>
    <h2>Available for hire</h2>
    {
      people.results.map((person, index) =>
        <li key={index}>
          <Link key={index} to={`/view/${person.id.value}`}>{`${person.name.title} ${person.name.first} ${person.name.last}`}</Link>
        </li>
    )
  }
  </div>
  <div>
  <h2>Hired</h2>
  {
    hiredPeople.map((person, index) => {
      <li key={index}>{people.name}</li>
    })
  }
  </div>
  </main>
*/