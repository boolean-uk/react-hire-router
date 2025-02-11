import { Link } from "react-router-dom";

function PeopleListItem(props) {
  const { person } = props;

  return (
    <li>
      <h3>
        {person.name.first} {person.name.last}
      </h3>
      {person.wage && <p>Wage: £{person.wage}</p>}
      <Link to={`/view/${props.index}`}>View Person</Link>
      {person.hired && <Link to={`/view/${props.index}/edit`}>Edit Employee</Link>}
    </li>
  );
}

export default PeopleListItem;
