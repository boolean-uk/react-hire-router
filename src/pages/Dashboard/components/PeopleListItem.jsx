
import { Link} from 'react-router-dom';
export default function PeopleListItem(props) {
  
  const person = props.person

  return (
    <li>
      <h3 >
      <Link to={`/view/${person.id}`}>{person.name.first} {person.name.last}</Link>
      </h3>
      
    </li>
  )
}
