import PeopleListItem from './PeopleListItem'
import { Link } from 'react-router-dom';
function PeopleList(props) {
  const { people } = props

  return (
    
    <ul>
      {people.map((person, index) => (
        <li key={index}>
        <PeopleListItem person={person} />
        <Link to={`/view/${person.login.uuid}`}>See details</Link>
        </li>
      ))}
    </ul>
    
  )
}

export default PeopleList
