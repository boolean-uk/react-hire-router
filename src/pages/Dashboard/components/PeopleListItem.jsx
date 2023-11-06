/* eslint-disable react/prop-types */
import { Link, useNavigate } from 'react-router-dom'
import { Navigate } from 'react-router-dom'
function PeopleListItem(props) {
  const { person } = props
  const navigate = useNavigate()

  return (
    <li>
      <h3>
        {person.name.first} {person.name.last}
      </h3>
      {person.wage && <p>Wage: £{person.wage}</p>}
      <Link 
        to={`/view/${person.name.first}`}
        state={person}>View</Link>
    </li>
  )
}

export default PeopleListItem
