import { Link } from "react-router-dom"

function PeopleListItem(props) {
  const { person, isHired } = props

  return (
    <li>
      <h3>
        {person.name.first} {person.name.last}
      </h3>
      {person.wage && <p>Wage: £{person.wage}</p>}
      
      {isHired ? (
        <p><Link to={`/people/${person.login.uuid}?mode=edit`}>Edit Profile</Link></p>
      ) : (
        <p><Link to={`/people/${person.login.uuid}?mode=view`}>View Profile</Link></p>
      )}
    </li>
  )
}

export default PeopleListItem
