import PeopleListItem from './PeopleListItem'
import { Link, useParams } from 'react-router-dom';

function PeopleList(props) {
  const { people } = props


  return (
    <ul>
      {people.map((person, index) => (
        <><PeopleListItem key={index} person={person} />
        <Link to={`view/${person.id.value}`}>
          View person
        </Link></>
      ))}
    </ul>
  )
}

export default PeopleList