import { Link } from "react-router-dom";
import { Person } from "../../../types";

interface props {
  person: Person;
}
function PeopleListItem(props:props) {
  const { person } = props;

  return (
    <li>
      <Link to={`/view/${person.id.value}`}>
        <h3>
          {person.name.first} {person.name.last}
        </h3>
        {person.wage && <p>Wage: £{person.wage}</p>}
      </Link>
    </li>
  );
}

export default PeopleListItem;
