import { Link } from "react-router-dom";
function PeopleListItem(props) {
  const { person } = props

  return (
    <li>
      <h3>
        <Link to={`view/${person.id}`}>
          {person.name.first} {person.name.last}
        </Link>
      </h3>
    </li>
  )
}

export default PeopleListItem
