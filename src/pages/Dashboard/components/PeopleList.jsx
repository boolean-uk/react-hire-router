import PeopleListItem from './PeopleListItem'
import { Link } from 'react-router-dom';


function PeopleList(props) {
  const { people } = props

  return (
    <ul>
      {people.map((person, index) => (
        <>
        <Link to={`/view/${person.id.value}`}>
          <PeopleListItem key={index} person={person} />
        </Link>
        </>
      ))}
    </ul>
  )
}

export default PeopleList
