import React from 'react';
import PeopleListItem from './PeopleListItem';

function PeopleList({ people, onHire }) {
  if (!Array.isArray(people)) {
    return <p>No people available</p>;
  }

  return (
    <ul>
      {people.map(person => (
        <PeopleListItem key={person.login.uuid} person={person} onHire={onHire} />
      ))}
    </ul>
  );
}

export default PeopleList;
