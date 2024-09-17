import { Route, Routes, Link } from 'react-router-dom';

function PeopleListItem(props) {
  const { person } = props

  return (
    <li>
      <h3>
        {person.name.first} {person.name.last}
      </h3>
      {person.wage !== undefined && <p>Wage: £{person.wage}</p>}
      <Link to={`/view/${person.login.uuid}`}>
        {person.wage !== undefined ? `Edit ${person.name.last}` : "Profile"}
        </Link>
    </li>
  )
}

export default PeopleListItem
