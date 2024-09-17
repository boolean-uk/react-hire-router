import { Link } from 'react-router-dom'
function PeopleListItem(props) {
  const { person } = props

  return (
    <li>
    <h3>
      {person.name.first} {person.name.last}
    </h3>
    {person.hired === false && <Link to={"/view/" + person.id}>View Profile</Link>}
    {person.hired === true && <Link to={"/view/" + person.id}>Edit</Link>}
    {person.hired === true && <p>Wage: £{person.wage}</p>}
  </li>
  )
}

export default PeopleListItem
