import { Link } from "react-router-dom";

function PeopleListItem(props) { // new isHired prop for on rule 13, if isHired is true then display edit
  const { person, isHired } = props

  return (
    <li>
      <Link to={`/view/${person.login.uuid}`}>
        <h3>
          {person.name.first} {person.name.last}
        </h3>
        </Link>
        {person.wage && <p>Wage: £{person.wage}</p>}
        {isHired && <Link to={`/edit/${person.login.uuid}`}>Edit</Link>}
    </li>
  )
}

export default PeopleListItem