import React from 'react' 
import { Link } from 'react-router-dom'

function PeopleListItem({ person, hirePerson, isHiredList }) {

  return (
    <div>
      <Link to={`/view/${person.id}`} state={person}> 
        {person.name.first} {person.name.last}
      </Link>
      {!isHiredList && <button onClick={() => hirePerson(person)}>Hire</button>}
      {isHiredList && (
        <Link to={`/edit/${person.id}`} state={person}> 
          <button>Edit</button>
        </Link>
      )}
    </div>
  );
}

export default PeopleListItem;