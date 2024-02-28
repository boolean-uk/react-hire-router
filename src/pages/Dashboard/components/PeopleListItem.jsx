import { Link } from 'react-router-dom'

function PeopleListItem(props) {
  const { person, index } = props

  return (
    <li>
      <h3>
        {person.name.first} {person.name.last}
      </h3>
      <Link to={`/dashboard/view/${index}`}>View Profile</Link>
      {person.wage && <p>Wage: £{person.wage}</p>}
    </li>
  )
}

export default PeopleListItem
