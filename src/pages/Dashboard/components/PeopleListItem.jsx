import { Link } from "react-router-dom";

function PeopleListItem({person}) {
  return (
    <li>
      <Link to={`/personProfile/${person.login.uuid}`}>
        <h3>
          {person.name.first} {person.name.last}
        </h3>
        {person.wage && <p>Wage: £{person.wage}</p>}
      </Link>
      
    </li>
  );
}

export default PeopleListItem;