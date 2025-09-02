import HiredList from './components/HiredList'
import PeopleList from './components/PeopleList'
import './Dashboard.css'

function Dashboard({people, hiredPeople}) {

  return (
    <main className="dashboard-layout">
      <section>
        <h2>People</h2>
        {people && <PeopleList people={people}/>}
      </section>
      <section>
        <h2>Hired People</h2>
        {hiredPeople && <HiredList people={hiredPeople}/>}
      </section>
    </main>
  )
}

export default Dashboard
