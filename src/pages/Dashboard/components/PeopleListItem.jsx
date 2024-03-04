import { Link, useNavigate } from "react-router-dom"

function PeopleListItem(props) {
  const { person } = props
  let navigate = useNavigate()
  const editURL = `/view/${person.login.uuid}/edit`

  return (
    <li>
      <h3>
        {person.name.first} {person.name.last}
      </h3>
      <Link to={`/view/${person.login.uuid}`} >Profile</Link>
      {person.wage && 
      <>
        <p>Wage: £{person.wage}</p>
        <button onClick={() => navigate(`/view/${person.login.uuid}/edit`)}>Edit</button>
      </>
      }
    </li>
  )
}

export default PeopleListItem
