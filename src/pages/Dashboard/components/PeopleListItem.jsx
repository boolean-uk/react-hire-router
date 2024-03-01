import { Link } from "react-router-dom"

function PeopleListItem(props) {
  const { person } = props

  return (
    <>
    {person.wage ? (
      <li>
      <Link to={`view/${person.login.uuid}`}>
      <h3>
        {person.name.first} {person.name.last}
      </h3>
      </Link>
      {person.wage && <p>Wage: £{person.wage}</p>}
      {/*Extension: Edit */}
      <Link to={`edit/${person.login.uuid}`}>Edit</Link>
    </li>
    ) : (
      <li>
      <Link to={`view/${person.login.uuid}`}>
      <h3>
        {person.name.first} {person.name.last}
      </h3>
      </Link>
    </li>
    )}
    </>
  )
}

export default PeopleListItem
