import React from 'react';
import { Link } from 'react-router-dom';

function PeopleListItem({ person, onHire }) {
  return (
    <li>
      <Link to={`/view/${person.login.uuid}`}>{person.name.first} {person.name.last}</Link>
      {onHire && <button onClick={() => onHire(person)}>Hire</button>}
    </li>
  );
}

export default PeopleListItem;
