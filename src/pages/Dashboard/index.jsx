import PeopleList from './components/PeopleList'
import PropTypes from 'prop-types'

function Dashboard(props) {
  // Destructuring props to access hiredPeople and people
  const { hiredPeople, people } = props

  return (
    <main className="dashboard-layout">
      {/* Section for displaying all people */}
      <section>
        <h2>People</h2>
        {/* Rendering PeopleList component with 'people' prop */}
        <PeopleList people={people} />
      </section>
      {/* Section for displaying hired people */}
      <section>
        <h2>Hired People</h2>
        {/* Rendering PeopleList component with 'hiredPeople' prop */}
        <PeopleList people={hiredPeople} />
      </section>
    </main>
  )
}

export default Dashboard

// PropTypes for type-checking
Dashboard.propTypes = {
  hiredPeople: PropTypes.array.isRequired, // Array of hired people
  people: PropTypes.array.isRequired, // Array of people data
}
