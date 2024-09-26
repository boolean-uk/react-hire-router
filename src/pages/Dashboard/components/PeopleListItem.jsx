import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'

function PeopleListItem(props) {
  const { person } = props

  return (
    <li>
      <h3>
        {(person.wage || person.wage === 0) ? '👩‍💼' : '👩‍🔧'}
        {(person.wage || person.wage === 0) ? person.name.first + person.name.last : (
          <Link to={`/view/${person.login.uuid}`}>
            {person.name.first} {person.name.last}
          </Link>
        )}
      </h3>
      {(person.wage || person.wage === 0) &&
        <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', gap: '10px'}}>
          <p>Wage: £{person.wage}</p>
          <Link to={`/view/${person.login.uuid}`}>Edit</Link>
        </div>
      }
    </li>
  )
}

PeopleListItem.propTypes = {
  person: PropTypes.object,
}

export default PeopleListItem
