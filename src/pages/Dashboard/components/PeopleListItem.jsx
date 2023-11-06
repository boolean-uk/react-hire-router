import { Link } from "react-router-dom"

function PeopleListItem({ person, people }) {

  // if person is hired, add an 'Edit wage' button & no Link
  if (person.wage !== undefined) {
    return (
      <li>
        <h3>
          {person.name.first} {person.name.last} {'=>'} {}
          <button>Edit wage</button>     
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
