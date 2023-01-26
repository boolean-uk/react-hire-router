import { Link } from 'react-router-dom'

function PeopleListItem(props) {
  const { person } = props

  return (
    <li>
      <h3>
        {person.name.first} {person.name.last}
      </h3>
      {person.wage && <p>Wage: £{person.wage}</p>}
      {person.wage && <Link to={`/edit/${person.login.uuid}`} state={{ person }}> Edit </Link>}
      {!person.wage && <Link to={`/view/${person.login.uuid}`} state={{ person }}> View </Link>}
    </li>
  )
}

export default PeopleListItem
