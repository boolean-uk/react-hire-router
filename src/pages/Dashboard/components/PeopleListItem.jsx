import { Link } from "react-router-dom"

function PeopleListItem(props) {
  const { person } = props

  console.log(person)
  return (
    <li>
      <h3>
        {person.name.first} {person.name.last}
        <Link to={`/people/${person.login.uuid}`}> View Profile</Link>
      </h3>
      {person.wage && <p>Wage: £{person.wage}</p>}
    </li>
  )
}

export default PeopleListItem
