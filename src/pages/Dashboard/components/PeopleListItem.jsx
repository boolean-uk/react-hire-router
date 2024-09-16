import { Link } from "react-router-dom"

function PeopleListItem({ person }) {

  // if person is hired, display name, wage and add an 'Edit wage' Link.
  // person's data passed through state
  if (person.wage !== undefined) {
    return (
      <li>
        <h3>
          {person.name.first} {person.name.last} {'=>'} {}
          <Link to={`/view/${person.id.value}/edit`} state={{ person }}>Edit Wage</Link>
        </h3>
        {person.wage && <p>Wage: £{person.wage}</p>}
      </li>
    )
  }
  // else, create a link to navigate to relevant route when clicked.
  else {
    return (
      <li>
          <Link to={`/view/${person.id.value}`}>
            <h3>
              {person.name.first} {person.name.last}       
            </h3>
          </Link>
      </li>
    )
  }
}

export default PeopleListItem
