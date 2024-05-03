import { Link, useNavigate } from "react-router-dom"

function PeopleListItem(props) {
  const { person } = props

  const navigate = useNavigate()

  return (
    <li>
      <h3>
        <Link to={`/view/${person.login.uuid}`}>
          {person.name.first} {person.name.last}
        </Link>
      </h3>
      {person.wage && 
      <>
        <p>Wage: £{person.wage}</p> 
        <button onClick={() => navigate(`/view/${person.login.uuid}`)}>Edit</button>
      </>}
    </li>
  )
}

export default PeopleListItem