import { Link } from "react-router-dom";

function PeopleListItem({ person, index }) {
  return (
    <li>
      <h3>
        {person.name.first} {person.name.last}
      </h3>
      {person.wage && <p>Wage: £{person.wage}</p>}
      <button>
        <Link to={`/view/${person.index || index}`}>View Profile</Link>
      </button>
    </li>
  );
}

export default PeopleListItem;
