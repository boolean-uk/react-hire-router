import { Link} from "react-router-dom"

function PeopleListItem(props) {
  const { person } = props

  return (
    <li>
      <h3>
        {person.name.first} {person.name.last}
    <Link to={`/view/${person.login.uuid}`}>
      <button style={{padding:"3px"}}>Profile</button>
    </Link>
      </h3>
      {person.wage && <p>Wage: £{person.wage}</p>}
    </li>
  )
}

export default PeopleListItem
