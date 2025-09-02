import { Link } from 'react-router-dom'

function PeopleListItem({ person }) {
  return (
    <li>
      <h3>
        {person.name.first} {person.name.last}
      </h3>
      <Link to={`/view/${person.login.uuid}`}>View Profile</Link>
    </li>
  )
}

export default PeopleListItem
