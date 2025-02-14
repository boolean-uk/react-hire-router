import PeopleList from './components/PeopleList'
import PropTypes from "prop-types";

function Dashboard(props) {
  const {hiredPeople, people, setHiredPeople} = props

  const hire = (id) => {
    setHiredPeople([...hiredPeople, id])
  }

  const getHiredPeople = () => {
    return people.filter((person) => {
      if (hiredPeople.includes(person.id.value)) {
        return person
      }
    })
  }

  console.log(getHiredPeople())

  return (
    <main className="dashboard-layout">
      <section>
        <h2>People</h2>
        <PeopleList people={people} onHire={hire}/>
      </section>
      <section>
        <h2>Hired People</h2>
        {<PeopleList people={getHiredPeople()} editable={true}/>}
      </section>
    </main>
  )
}

Dashboard.propTypes = {
  hiredPeople: PropTypes.arrayOf(PropTypes.number).isRequired,
  people: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    role: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
  })).isRequired,
  setHiredPeople: PropTypes.func.isRequired,
}

export default Dashboard
