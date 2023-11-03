import { Link } from "react-router-dom"

function PeopleListItem(props) {
  const { person } = props

  return (
    <li>
      <h3>
        {person.name.first} {person.name.last} 
        <Link to={`/view/${person.id.name}`} state={{ person }}>View Profile</Link>
      </h3>
      {person.wage && <p>Wage: £{person.wage} per annum.</p>}
    </li>
  )
}

export default PeopleListItem
