import { Link, useLocation } from "react-router-dom";
<Link to="new-path" state={{ some: "value" }} />;

function PeopleListItem(props) {
  const { person } = props;
  const id = person.login.uuid;

  return (
    <li>
      <Link to={`view/${id}`} state={{ person: person }}>
        <h3>
          {person.name.first} {person.name.last}
        </h3>
        {person.wage && <p>Wage: £{person.wage}</p>}
      </Link>
    </li>
  );
}

export default PeopleListItem;
