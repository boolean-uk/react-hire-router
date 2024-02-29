import { Link } from 'react-router-dom';
import PropTypes from 'prop-types'

function PeopleListItem(props) {
  const { person, isHired } = props

  return (
    <li>
      {!isHired ? 
        <h3><Link to={`/view/${person.login.uuid}`}>{person.name.first} {person.name.last}</Link></h3>
        : <h3>{person.name.first} {person.name.last}</h3>}
      {person.wage && <p>Wage: £{person.wage}</p>}
    </li>
  )
}

PeopleListItem.propTypes = {
  person: PropTypes.object,
  isHired: PropTypes.bool,
}

export default PeopleListItem
