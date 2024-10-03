import { Link } from 'react-router-dom'

function PeopleListItem({person: {id, name, wage}}) {
  
  return (
    <li>
      <h3>
        <Link to={`view/${id.value}`}>{name.first} {name.last}</Link>
      </h3>
      {wage && <><p>Wage: £{wage}</p><button><Link to={`view/${id.value}`}>Edit</Link></button></>}
    </li>
    
  )
}

export default PeopleListItem
