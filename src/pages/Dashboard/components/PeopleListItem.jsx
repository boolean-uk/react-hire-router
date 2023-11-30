import { Link } from 'react-router-dom'
import PeopleListItem from './PeopleListItem'

function PeopleList(props) {

  return (
    <>
      <ul>
        {props.people?.map((person) => (
          <div key={person.login.uuid}>
            <PeopleListItem person={person} />
            <Link to={`/dashboard/${person.login.uuid}`}
            state={{ person: person }}
            >See Person Details</Link>
          </div>
        ))}
      </ul>
    </>
  );
}

export default PeopleList
