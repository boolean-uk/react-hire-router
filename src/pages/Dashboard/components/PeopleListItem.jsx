import { Link } from "react-router-dom"
function PeopleListItem({ person }) {
  const { login: { uuid }, name } = person

  return (
    <li key={uuid}>
      <Link to={`/view/${uuid}`}>
        {name.first} {name.last}
      </Link>
    </li>
  )
}

export default PeopleListItem
