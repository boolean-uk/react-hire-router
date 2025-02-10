import PeopleList from './components/PeopleList'

function Dashboard(props) {
  // const [people, setPeople] = useState([])
  const people = props.people
  const hiredPeople = props.hiredPeople
  
  return (
    <main className="dashboard-layout">
      <section>
        <h2>People</h2>
        <PeopleList people={people.filter(p => !hiredPeople.includes(p))} />
      </section>
      <section>
        <h2>Hired People</h2>
        <PeopleList people={hiredPeople} />
      </section>
    </main>
  )
}

export default Dashboard
