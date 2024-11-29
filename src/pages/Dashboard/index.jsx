import PeopleList from './components/PeopleList';

function Dashboard(props) {
  //console.log("dash props:", props)
  const { hiredPeople, people } = props
  console.log("hired @ dash:", hiredPeople)
  console.log("people @ dash:", people)

  return (
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
  )
}

export default Dashboard