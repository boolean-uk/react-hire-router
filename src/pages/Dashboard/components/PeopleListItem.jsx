import { Link, useNavigate } from 'react-router-dom'

function PeopleListItem(props) {
  const { person, index, hired } = props

  const navigate = useNavigate()

  return (
    <li>
      <h3>
        {person.name.first} {person.name.last}
      </h3>
      <Link to={`/dashboard/view/${index}`}>View Profile</Link>
      {person.wage && <p>Wage: £{person.wage}</p>}
      {hired && <button onClick={() => navigate(`/dashboard/view/${index}`)}>Edit</button>}
    </li>
  )
}

export default PeopleListItem
