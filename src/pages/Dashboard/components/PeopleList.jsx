import { Link } from 'react-router-dom'
import PeopleListItem from './PeopleListItem'

function PeopleList(props) {
  const { people, hirePerson, handleEdit } = props

  

  return (
    <ul>
      {people.map((person, index) => (
        <div key={index}>
          <PeopleListItem person={person} />
          <li>
            

          <Link to={`/people/${index}`}>View</Link>
          
          </li>
        </div>
      ))}
    </ul>
  );

      }
  

export default PeopleList
