import PeopleList from './components/PeopleList'
import '../../../src/App.css'
import HiredPeople from './components/HiredPeople'

function Dashboard(props) {
  
  return (
    <main className="dashboard-layout">
      <section>
        <h2>People</h2>
        <ul>
        <PeopleList/>
        </ul>
      </section>
      <section>
        <h2>Hired People</h2>
        <HiredPeople/>
      </section>
    </main>
  )
}

export default Dashboard
