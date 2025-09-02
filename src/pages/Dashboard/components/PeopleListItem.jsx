import { Link } from "react-router-dom"

function PeopleListItem(props) {
  const { person } = props

  return (
    <>
      <Link to={`/view/${person.login.uuid}`}>
        <li>
          <h3>
            {person.name.first} {person.name.last}
          </h3>
          {person.wage && <p>Wage: £{person.wage}</p>}
        </li>
      </Link>
    </>
  )
}

export default PeopleListItem
