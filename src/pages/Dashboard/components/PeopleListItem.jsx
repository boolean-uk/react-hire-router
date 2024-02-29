import { useNavigate } from 'react-router-dom'

function PeopleListItem(props) {
  const { person } = props

  const navigate = useNavigate()

  function handleEdit() {
    navigate(`view/${person.id.value}`)
  }
  return (
    <li>
      <h3 onClick={() => navigate(`view/${person.id.value}`)}>
        {person.name.first} {person.name.last}
      </h3>
      {person.wage && 
      <>
      <p>Wage: £{person.wage}</p>
      <button onClick={() => handleEdit()}>Edit</button>
      </>
      }
    </li>
  )
}

export default PeopleListItem
