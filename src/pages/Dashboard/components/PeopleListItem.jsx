import { Link } from "react-router-dom"

function PeopleListItem(props) {
  const { person } = props

  return (
    <li>
      <h3>
        {person.name.first} {person.name.last}
      </h3>
      <p>{person.wage != 0 && person.wage !== undefined ? `Wage: £${person.wage}` : ""}</p>
      <Link to={`/view/${person.login.uuid}`}>{person.wage != 0 && person.wage !== undefined ? "Edit" : "View Profile"}</Link>
    </li>
  )
}

export default PeopleListItem
