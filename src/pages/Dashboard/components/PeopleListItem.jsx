import { Link } from "react-router-dom"
import '../../../App.css'
function PeopleListItem(props) {
  const { person } = props

  return (
    <article className="user_profile">
    <li>
      <img src={person.picture.medium} alt={`${person.name.first} ${person.name.last}`} />
      
      <h3 className="profile_name">
        <Link to={`view/${person.login.uuid}`}> {person.name.first} {person.name.last}</Link>
      </h3>
      {person.wage && <p>Wage: £{person.wage}</p>}
      
    </li>
    </article>
  )
}

export default PeopleListItem
