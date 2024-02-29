import {
  Link, Navigate
} from "react-router-dom";
import { useNavigate } from 'react-router-dom'

function PeopleListItem(props) {
  const { person } = props
  
  const navigate = useNavigate()
  return (
    <li>
      <h3>
        {person.wage ? <p>{person.name.first} {person.name.last}</p> : <Link to={`/view/${person.login.uuid}`}>
          {person.name.first} {person.name.last} 
        </Link>}
      </h3>
      {person.wage && <p>Wage: £{person.wage}  
      
        <button onClick={() => navigate(`/view/${person.login.uuid}`)}>Edit</button>
      </p>}
    </li>
  )
}

export default PeopleListItem
