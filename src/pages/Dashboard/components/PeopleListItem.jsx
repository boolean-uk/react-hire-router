import { Link, useNavigate } from 'react-router-dom'

function PeopleListItem(props) {
  const { person } = props
  const navigate = useNavigate()


  let edit = <></>
  if(props.editable) {
    edit = <button onClick={() => navigate(`/view/${person.id.value}`)}>Edit</button>
  }

  return (
    <li>
      <h3>
        <Link to={`/view/${person.id.value}` }>{person.name.first} {person.name.last}</Link>
      </h3>
      {person.wage && <p>Wage: £{person.wage}</p>}
      {edit}
    </li>
  )
}

export default PeopleListItem
