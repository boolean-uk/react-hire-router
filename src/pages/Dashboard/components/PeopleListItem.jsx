import { Link } from "react-router-dom"

function PeopleListItem(props) {
  const { person } = props

  return (
    <>
    <li>
      <nav>
        <h3>
          <Link to={`view/${person.login.uuid}`}> {person.name.first} {person.name.last} </Link>
          {person.wage && <p>Wage: £{person.wage}</p>}
        </h3>
      </nav>
    </li>
    </>
  )
}

export default PeopleListItem
