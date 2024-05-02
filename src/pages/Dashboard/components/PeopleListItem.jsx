import { Link } from "react-router-dom";

function PeopleListItem(props) {
  const { person, editable } = props
  return (
    <li>
      <h3>
     <Link to={`/${person.login.uuid}`}>{person.name.first} {person.name.last}</Link>
      </h3>
      {person.wage && editable && <p>Wage: £{person.wage}</p>}
      {editable && <button>Edit</button>}
    </li>
  )
}

export default PeopleListItem
