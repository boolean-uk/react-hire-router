import { Link } from "react-router-dom"
import { useNavigate } from "react-router-dom"


function PeopleListItem(props) {
  const { person } = props

  // const navigate = useNavigate()

  return (
    <li>
      <Link to={`/person/${person.email}`} state={person} >
        <h3>{/* <h3 onClick={() => navigate('/person')}> */}
          {person.name.first} {person.name.last}
        </h3>
      </Link>
        {/* <h3>
          {person.name.first} {person.name.last}
        </h3> */}
      {person.wage && <p>Wage: £{person.wage}</p>}
    </li>
  )
}

export default PeopleListItem
