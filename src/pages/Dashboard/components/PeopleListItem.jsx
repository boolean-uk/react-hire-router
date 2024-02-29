import { useNavigate } from 'react-router-dom'

function PeopleListItem(props) {
  const { person } = props

  const navigate = useNavigate()
  return (
    <li>
      <h3 onClick={() => navigate(`view/${person.id.value}`)}>
        {person.name.first} {person.name.last}
      </h3>
      {person.wage && <p>Wage: £{person.wage}</p>}
    </li>
  )
}

export default PeopleListItem
