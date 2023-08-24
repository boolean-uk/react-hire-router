import React from 'react'
import PeopleListItem from './PeopleListItem'

function PeopleList({ people, hirePerson, isHiredList }) {

  return (
    <div>
      {people.map((person, index) => (
        <div key={index}>
          <PeopleListItem
            person={person}
            hirePerson={hirePerson}
            isHiredList={isHiredList}
          />
        </div>
      ))}
    </div>
  );
}

export default PeopleList;