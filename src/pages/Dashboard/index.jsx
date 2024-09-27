import PeopleList from './components/PeopleList'

function Dashboard({ hiredPeople, people }) {

  {
    console.log(people)
    console.log(hiredPeople)
    return (
      <main className="dashboard-layout">
        <section>
          <h2>People</h2>
          {people && <PeopleList people={people} />}
        </section>
        <section>
          <h2>Hired People</h2>
          {hiredPeople && < PeopleList people={hiredPeople} />}
        </section>
      </main>
    )
  }
}

import PropTypes from 'prop-types'
Dashboard.propTypes = {
  setPeople: PropTypes.func,
  hiredPeople: PropTypes.arrayOf(PropTypes.object),
  people: PropTypes.arrayOf(PropTypes.object)
}
export default Dashboard
