/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";

function PeopleListItem(props) {
  const { person, hired } = props

  return (
    <li>
      <h3>
        {person.name.first} {person.name.last}
      </h3>
      {hired && <p>Wage: £{person.wage}</p>}

      {!hired ?
      <Link to={`/view/${person.login.uuid}`}>
        <button>View Profile</button>
      </Link> :
      <Link to={`/view/${person.login.uuid}`}>
        <button>Edit</button>
      </Link>}
    </li>
  )
}

export default PeopleListItem
