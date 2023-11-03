import { Link } from "react-router-dom"

function PeopleListItem({ person }) {

// links created to navigate to relevant route when clicked.
// each person's data passed to component using state.
  return (
    <li>
        <Link to={`/view/${person.id.value}`} state={{ person }}>
          <h3>
            {person.name.first} {person.name.last}       
          </h3>
        </Link>
      {person.wage && <p>Wage: £{person.wage}</p>}
    </li>
  )
}

export default PeopleListItem
