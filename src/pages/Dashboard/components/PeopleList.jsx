
import { Link } from "react-router-dom";
import PeopleListItem from "./PeopleListItem";

function PeopleList({ people }) {
  return (
    <ul>
      {people.map((person) => (
        <li key={person.login.uuid}>
          <PeopleListItem person={person} />
          <Link to={`/view/${person.login.uuid}`}>View Profile</Link>
        </li>
      ))}
    </ul>
  );
}

export default PeopleList;
