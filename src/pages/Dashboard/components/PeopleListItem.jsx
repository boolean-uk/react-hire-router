import { Link } from 'react-router-dom'
function PeopleListItem({ person }) {

  return (
    <li>
      <Link to={`view/${person.id.value}`}>
        <h3>
          {person.name.first} {person.name.last}
        </h3>
      </Link>
      {person.wage && <p>Wage: £{person.wage}</p>}
    </li>
  )
}

import PropTypes from 'prop-types'
PeopleListItem.propTypes = {
  person: PropTypes.object
}

export default PeopleListItem
