/* eslint-disable react/prop-types */
import { Link } from "react-router";
import PeopleListItem from "./PeopleListItem";

function PeopleList({ people }) {
  return (
    <ul>
      {people.map((person, index) => (
        <Link key={index} to={`/hireform/${person.id.value}${person.email}`} state={person}>
          <PeopleListItem person={person} />
          {person.wage ? <button>Edit</button> : null}
        </Link>
      ))}
    </ul>
  );
}

export default PeopleList;
