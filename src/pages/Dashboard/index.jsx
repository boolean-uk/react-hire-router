import PeopleList from './components/PeopleList'

function Dashboard(props) {
  console.log("Inside Dashboard: ", { props });

  const { hiredPeople, people, hiredPerson } = props


  return (
    <main className="dashboard-layout">
      <section>
        <h2>People</h2>
        <PeopleList people={people} hiredPerson={hiredPerson}/>
      </section>
      <section>
        <h2>Hired People</h2>
        <PeopleList people={hiredPeople} />
      </section>
    </main>
  )
}

export default Dashboard