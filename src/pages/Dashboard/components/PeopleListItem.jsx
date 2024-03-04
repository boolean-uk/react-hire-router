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
          {/* Added a link with a button that routes to the edit page */}
          <Link to={`/view/${person.id.value}/edit`}>
            <button>edit</button>
          </Link>
        </p>}
      {/*Adding a link to the PersonProfile*/}
      <Link to={`/view/${person.id.value}`}><button>View profile</button></Link>
    </li>
  )
}

export default PeopleListItem
