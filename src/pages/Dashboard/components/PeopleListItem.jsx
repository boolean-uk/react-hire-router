import { Link } from 'react-router-dom'


function PeopleListItem({person}) {

  return (
    <li>
      <h3>
        {person.name.first} {person.name.last}
      </h3>
      {person.wage && <p>Wage: £{person.wage}</p>}
      <Link to={`/view/${person.login.uuid}`}>{person.wage ? "Edit" : "View Profile"}</Link>    
    </li>
  )
}

export default PeopleListItem
