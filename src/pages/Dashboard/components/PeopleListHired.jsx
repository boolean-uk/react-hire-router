import React from 'react'
import PeopleListItemHired from './PeoplListItemHired';

function PeopleListHired(props) {
    const { people, handleEdit } = props;
  
    return (
      <ul>
        {people.map((person, index) => (
          <PeopleListItemHired key={index} person={person} handleEdit={handleEdit} />
        ))}
      </ul>
    );
  }

export default PeopleListHired