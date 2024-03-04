import { Link } from "react-router-dom"

function PeopleListItem(props) {
  const { person } = props

  return (
    <li>
      <h3>
        {person.name.first} {person.name.last}
      </h3>
      {person.wage && 
        <p>
          Wage: £{person.wage} 
          <Link to={`/view/${person.id.value}/edit`}>
            <button>edit</button>
          </Link>
        </p>}
      {/*Adding a link to the PersonProfile*/}
      <Link to={`/view/${person.id.value}`}>View profile</Link>
    </li>
  )
}

export default PeopleListItem
