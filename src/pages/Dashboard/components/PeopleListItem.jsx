import {Link,} from "react-router-dom";
/* eslint react/prop-types:0 */ 

function PeopleListItem(props) {
  const { person, id } = props
  return (
    <li className= "person-item">
      <h3>
        {person.name.first} {person.name.last}
      </h3>
      {person.wage && <p>Wage: £{person.wage}</p>}
      <Link to={`/view/${person.login.uuid}`}>Profile</Link>

      <p>{person.name.first} {person.name.last}</p>
      {person.wage && <p>Wage: £{person.wage}</p>}
      <Link to={`edit/${id}`}>
        <button>Edit {person.name.first}</button>
      </Link>
    </li>
    )  
  
  
}

export default PeopleListItem
