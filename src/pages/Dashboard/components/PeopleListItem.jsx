import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

function PeopleListItem({person, edit}) {
  console.log(edit)
  return (
    <li>
      <h3>
        {person.name.first} {person.name.last}
      </h3>
      <Link to={`/view/${person.id}`}>Profile</Link>
      {person.wage && <p>Wage: £{person.wage}</p>}
      {edit ? <Link to={`/edit/${person.id}`}>Edit</Link> : null}
    </li>
  )
}

export default PeopleListItem

PeopleListItem.propType = {
  person: PropTypes.array,
  edit: PropTypes.bool
}
