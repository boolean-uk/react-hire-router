import React from "react";
import { Link } from "react-router-dom";

function PeopleListItem(props) {
  const { person } = props;

  return (
    <li key={person.login.uuid}>
      <h3>
        {person.name.first} {person.name.last}
        <Link to={`view/${person.login.uuid}`} state={{ person }}>
          View Profile
        </Link>
      </h3>
      {person.wage && <p>Wage: £{person.wage}</p>}
    </li>
  );
}

export default PeopleListItem;

