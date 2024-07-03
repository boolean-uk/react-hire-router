import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

function PeopleListItem(props) {
  const { person } = props
  const navigate = useNavigate();
   
  return (
    <li>
      <Link to={`/view/${person.id.value}`}>
        <h3>
          {person.name.first} {person.name.last}
        </h3>
      </Link>
      {person.wage && <p>Wage: £{person.wage}</p>}
      <button
        onClick={function () {
          navigate(`/view/${person.id.value}/edit`);
        }}
      >
        Edit Profile
      </button>
    </li>
  );
}

export default PeopleListItem
