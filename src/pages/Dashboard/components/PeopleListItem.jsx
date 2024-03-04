import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'

PeopleListItem.propTypes = {
  person: PropTypes.object
}

function PeopleListItem({ person }) {
  return (
    <li>
      <h3>
        <Link to={"/view/" + person.id}>{person.name.first} {person.name.last}</Link>
      </h3>
      {person.wage && <p>Wage: £{person.wage}</p>}
    </li>
  )
}

export default PeopleListItem
