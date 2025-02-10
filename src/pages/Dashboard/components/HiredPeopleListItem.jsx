import { Link, Route, Routes } from 'react-router-dom';

function HiredPeopleListItem(props) {
  const { person } = props

  return (
    <li>
      <h3>
        {person.name.first} {person.name.last}
        <Link to={`/edit/${person.email}`}>Edit</Link>
      </h3>
      {person.wage && <p>Wage: £{person.wage}</p>}
    </li>
  )
}

export default HiredPeopleListItem
