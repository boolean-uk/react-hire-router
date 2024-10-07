import { Link } from 'react-router-dom';

function PeopleListItem({ person }) {
  return (
    <Link to={`/view/${person.login.uuid}`}>
      {person.name.first} {person.name.last}
    </Link>
  );
}

export default PeopleListItem;



