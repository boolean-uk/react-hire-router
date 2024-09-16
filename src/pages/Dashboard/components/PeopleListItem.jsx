import { Link } from 'react-router-dom'

function PeopleListItem(props) {
  const { person, hired } = props

  return (
    <li className= "person-item">
      <h3>
      <Link to={`/view/${person.login.uuid}`}>{person.name.first} {person.name.last}</Link>
      </h3>
      {person.wage && <p>Wage: £{person.wage}</p>}
      {hired && 
      <Link 
        to={`/edit/${person.login.uuid}`}>
        <button>
          Edit
        </button> 
      </Link>}
    </li>
  )
}

export default PeopleListItem
