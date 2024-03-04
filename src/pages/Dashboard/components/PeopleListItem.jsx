import { useNavigate } from "react-router-dom";

function PeopleListItem(props) {
  const { person, onHire, onView } = props;

  return (
    <li>
      <h3>
        {person.name.first} {person.name.last} <br></br> Wage: {person.wage}
      </h3>
      <button onClick={() => onHire(person)}>Hire</button>
       {onView && <button onClick={onView}>View Profile</button>}
    </li>
  );
}

export default PeopleListItem
