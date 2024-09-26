import { Link } from "react-router-dom"

function PeopleListItem({person, index}) {

  return (
    <li key={index}>
      {person.wage ? 
            <h3>
            {person.name.first} {person.name.last}
          </h3> :
      <Link to={`/view/${person.login.uuid}`}>
      <h3>
        {person.name.first} {person.name.last}
      </h3>
      </Link>}
      {person.wage && <p>Wage: £{person.wage}</p>}
      {person.wage ? <Link to={`/edit/${person.login.uuid}`}>
      <button>Edit</button>
      </Link> : null }
    </li>
  )
}

export default PeopleListItem
