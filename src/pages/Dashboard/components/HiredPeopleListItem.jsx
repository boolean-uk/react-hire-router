
import { useNavigate } from 'react-router-dom';
export default function PeopleListItem(props) {
  
  //const { key } = useParams();
  const person = props.person
  const navigate = useNavigate()

  return (
    <li>
      <h3 >
      {person.name.first} {person.name.last}
      <button onClick={() => navigate(`/view/${person.id}/edit`)}>Edit</button>
      </h3>
      {person.name.title && <p> Title: {person.name.title}</p>}
      {person.wage && <p> Wage: £{person.wage}</p>}
    </li>
  )
}
