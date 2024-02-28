import PeopleListItem from "./PeopleListItem";
import { Link } from "react-router-dom";

function PeopleList({ people }) {
  return (
    <ul>
      {people && people.length > 0 ? (
        people.map((person) => (
          <PeopleListItem person={person} key={person.id} />
        ))
      ) : (
        <li>No users available</li>
      )}
    </ul>
  );
}

export default PeopleList;
