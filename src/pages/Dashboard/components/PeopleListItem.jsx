import { Route, Routes, Link, json } from 'react-router-dom';

function PeopleListItem({person, onEdit}) {

  console.log("onEdit prop:", onEdit); // This should log a function if everything is correct


  return (
    <li className= "container">
      <Link to={`/view/${person.login.uuid}`}>
      <h3>
        {person.name.first} {person.name.last}
      </h3>
      </Link>
      {person.wage && <p>Wage: £{person.wage}</p>}
      {onEdit && <button onClick={() => onEdit(person)}> Edit </button>}
    </li>
  )
}

export default PeopleListItem
