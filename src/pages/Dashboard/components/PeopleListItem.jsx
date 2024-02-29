import { Link } from 'react-router-dom'

function PeopleListItem(props) {
  const { person, ind } = props

  return (
    <li>
      <h3>
        {person.name.first} {person.name.last}
      </h3>
      {person.wage && <p>Wage: £{person.wage}</p>}      
      <Link to={`/view/${person.login.uuid}`}>View {`${person.name.first}'s`} profile</Link>
      {person.wage && 
      <Link to={`/view/${person.login.uuid}`}>View {`${person.name.first}'s`}
      <button>Edit</button></Link>
      }
    </li>
  )
}

export default PeopleListItem
