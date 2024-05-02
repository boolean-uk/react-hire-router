import { Link } from 'react-router-dom';
import { useNavigate } from "react-router-dom";

function PeopleListItem(props) {
  const { person } = props
  const navigate = useNavigate();

  const goToProfile = () => {
    navigate(`/view/${person.login.uuid}/edit`);
  }

  return (
    <li>
      <h3>
        <Link to={`/view/${person.login.uuid}`}>
          {person.name.first} {person.name.last}
        </Link>
      </h3>
      {person.wage && <p>Wage: £{person.wage}</p>}
      {person.wage && <button
        onClick={goToProfile}>
        Edit
      </button>}
    </li>
  )
}

export default PeopleListItem
