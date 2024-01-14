/* eslint-disable react/prop-types */
import { Link } from 'react-router-dom';

export default function PeopleListItem({ person }) {
  return (
    <li>
      <h3>
        {person.name.first} {person.name.last}
      </h3>
      {person.wage && <p>Wage: £{person.wage}</p>}
      <Link to={`/view/${person.login.username}`} state={{ person }}>
        View Profile
      </Link>
    </li>
  );
}
