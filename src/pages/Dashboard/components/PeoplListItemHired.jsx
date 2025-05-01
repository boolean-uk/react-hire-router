import React from 'react'
import { Link } from 'react-router-dom';

function PeopleListItemHired({person, handleEdit}) {
  return (
    <li>
      
        <h3>
          {person.name.first} {person.name.last}
        </h3>
        {person.wage && <p>Wage: £{person.wage}</p>}
    
        <button onClick={() => handleEdit(person.login.uuid)} className="button">Edit</button>
    </li>
  );
}

export default PeopleListItemHired