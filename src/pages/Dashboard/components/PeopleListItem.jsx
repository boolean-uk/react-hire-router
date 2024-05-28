import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'

function PeopleListItem(props) {
  // Destructuring props to access person
  const { person } = props

  return (
    <li>
      {/* Displaying person's name */}
      <h3>
        {person.name.first} {person.name.last}
      </h3>
      
      {/* Displaying person's wage if available */}
      {person.wage && <p>Wage: £{person.wage}</p>}
      
      {/* Link to view/edit person's profile */}
      <Link to={`view/${person.id}`}>
        {/* Conditional text based on whether wage is available */}
        {person.wage ? "Edit" : "View Profile"}
      </Link>
    </li>
  )
}

export default PeopleListItem

// PropTypes for type-checking
PeopleListItem.propTypes = {
  person: PropTypes.object.isRequired // Object representing a person
}
