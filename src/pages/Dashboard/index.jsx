import { useContext } from 'react'
import { peopleContext } from '../../App'
import PeopleList from './components/PeopleList'
import PropTypes from 'prop-types'

function Dashboard() {
  const { people, hiredPeople } = useContext(peopleContext)

  return (
    <main className="dashboard-layout">
      <section>
        <h2>People</h2>
        <PeopleList people={people.filter((p) => !hiredPeople.includes(p))}/>
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
