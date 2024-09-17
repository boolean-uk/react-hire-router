import { Link } from "react-router-dom";

function PeopleListItem(props) {
  const { person } = props;

  return (
    <li>
      <h3>
        {person.name.first} {person.name.last}
      </h3>
      {person.hired && <p>Wage: £{person.wage}</p>}
      <Link to={`/view/${person.id.value}`} state={{ person: person }}>
        {person.hired ? "Edit" : "View"}
      </Link>
    </li>
  );
}

export default PeopleListItem;
