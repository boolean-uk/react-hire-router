import PeopleListItem from "./PeopleListItem";
import { Link } from "react-router-dom";

function PeopleList({people}) {
  return (
    <ul>
      {people.map((person, index) => (
        <li key={index}>
          <PeopleListItem person={person} />
          <Link style={{marginRight:'0.5rem'}} to={`/view/${person.id.value}`}>View Profile</Link>
          <Link  to={`/view/${person.id.value}/edit`}>Edit Profile</Link>
        </li>
      ))}
    </ul>
  );
}

export default PeopleList;
