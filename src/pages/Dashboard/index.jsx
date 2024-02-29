import PeopleList from './components/PeopleList'
import PropTypes from 'prop-types'

function Dashboard(props) {
  const { hiredPeople, people } = props

  return (
    <main className="dashboard-layout">
      <section>
        <h2>People</h2>
        <PeopleList people={people}/>
      </section>
      <section>
        <h2>Hired People ({hiredPeople.length})</h2>
        <PeopleList people={hiredPeople} isHired={true}/>
      </section>
    </main>
  )
}

Dashboard.propTypes = {
  people: PropTypes.arrayOf(PropTypes.object),
  hiredPeople: PropTypes.array,
}

export default Dashboard
