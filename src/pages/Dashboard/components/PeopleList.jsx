import { Link } from 'react-router-dom';
import PeopleListItem from "./PeopleListItem";

export default function PeopleList(props) {
  const { people } = props;

  return (
    <ul>
      {people && people.length > 0 ? (
        people.map((person) => (
          <li key={person.id}>
            <Link to={`/view/${person.id}`}>
              <PeopleListItem person={person} />
            </Link>
          </li>
        ))
      ) : (
        <li>No users available</li>
      )}
    </ul>
  );
}
