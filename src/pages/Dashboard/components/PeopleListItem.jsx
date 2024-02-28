import { Link } from "react-router-dom";

function PeopleListItem(props) {
  const { person } = props;

  return (
    <li>
      <h3>
        {person.name.first} {person.name.last}
      </h3>
      {person.wage && <p>Wage: £{person.wage}</p>}
      {person.wage && <Link to={`/view/${person.id}/edit`}>Edit hired</Link>}
      {!person.wage && <Link to={`/view/${person.id}`}>View profile</Link>}
    </li>
  );
}

export default PeopleListItem;
