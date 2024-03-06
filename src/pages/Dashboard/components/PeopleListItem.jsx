import { Link } from "react-router-dom"
function PeopleListItem(props) {
  const { person } = props

  return (
    <li>
      <h3>
        {person.name.first} {person.name.last} 
      </h3>
      <Link to={`/view/${person.id.name}`}>View Profile</Link>
    </li>
    
  )
}

export default PeopleListItem
