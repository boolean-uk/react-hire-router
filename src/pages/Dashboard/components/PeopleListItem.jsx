import { Link } from "react-router-dom";

function PeopleListItem(props) {
  const { person } = props;

  return (
    <li>
      <h3>
        {person.name.first} {person.name.last}
      </h3>
      {person.wage && <p>Wage: £{person.wage}</p>}
      <Link to={`/dashboard/${person.id.name}`}>To profile</Link>
      {person.wage !== undefined && (
        <Link to={`/dashboard/${person.id.name}/edit`}>Edit</Link>
      )}
    </li>
  );
}

export default PeopleListItem;
