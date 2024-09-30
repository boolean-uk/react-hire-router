import { Link } from "react-router-dom"

function PeopleListItem({person, isHired}) {
  return (
    <li>
      <h3>
        {person.name.first} {person.name.last}
      </h3>
      {person.wage && <p>Wage: £{person.wage}</p>}
      {isHired ? 
        (<Link to={`/profile/${person.login.uuid}`}>Edit</Link>) : 
        (<Link to={`/profile/${person.login.uuid}`}>View person</Link>)}
    </li>
  )
}

export default PeopleListItem
