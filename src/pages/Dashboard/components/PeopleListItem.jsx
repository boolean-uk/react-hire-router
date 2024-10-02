import { Link } from "react-router-dom";

function PeopleListItem({ person, isHired }) {

  const renderName = () => {
    if (isHired) {
      return <h3>{person.name.first} {person.name.last}</h3>;
    } else {
      return (
        <Link to={`view/${person.login.uuid}`}>
          <h3>{person.name.first} {person.name.last}</h3>
        </Link>
      );
    }
  };

  return (
    <li>
      {renderName()}
      {person.wage && <p>Wage: £{person.wage}</p>}
    </li>
  );
}

export default PeopleListItem;
