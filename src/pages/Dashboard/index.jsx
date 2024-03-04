import PeopleList from './components/PeopleList'

import PropTypes from 'prop-types'

Dashboard.propTypes = {
  hiredPeople: PropTypes.array,
  people: PropTypes.array
}

function Dashboard({ hiredPeople, people }) {
  return (
    <main className="dashboard-layout">
      <section>
        <h2>People</h2>
        <PeopleList people={people} ignoreHired={true} />
      </section>
      <section>
        <h2>Hired People</h2>
        <PeopleList people={hiredPeople} />
      </section>
    </main>
  )
}

export default Dashboard
