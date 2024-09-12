import { Link } from "react-router-dom";

function PeopleListItem(props) {
  const { person, isInHiredField } = props;

  return (
    <li>
      <h3>
        {person.name.first} {person.name.last}
      </h3>
      {person.wage && <p>Wage: £{person.wage}</p>}
      <p></p>
      {isInHiredField && (
        <Link to={`/edit/${parseInt(person.id.value)}`}>Edit Profile</Link>
      )}
      <p></p>
      {!(isInHiredField) && (
        <Link to={`/view/${parseInt(person.id.value)}`}>View Profile</Link>
      )}
    </li>
  );
}

export default PeopleListItem;
