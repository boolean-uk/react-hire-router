import { Link, useNavigate } from "react-router-dom";
import PropTypes from "prop-types";

function PeopleListItem(props) {
  const { person } = props;
  const navigate = useNavigate();

  const handleEdit = () => {
    navigate(`/view/${person.email}`, { state: { person } });
  };

  // Using email as the unique identifier because the id object is empty from the API
  return (
    <li>
      <h3>
        {person.name.first} {person.name.last}
      </h3>

      {person.wage && (
        <div>
          <img src={person.picture.medium} alt={person.name.first} />
          <p>Wage: £{person.wage}</p>
          <button onClick={handleEdit}>Edit</button>
        </div>
      )}

      {!person.wage && (
        <Link to={`/view/${person.email}`} state={{ person }}>
          View Profile
        </Link>
      )}
    </li>
  );
}

PeopleListItem.propTypes = {
  person: PropTypes.shape({
    name: PropTypes.shape({
      first: PropTypes.string.isRequired,
      last: PropTypes.string.isRequired,
    }).isRequired,
    picture: PropTypes.shape({
      medium: PropTypes.string.isRequired,
    }).isRequired,
    wage: PropTypes.string,
    id: PropTypes.object.isRequired,
    email: PropTypes.string.isRequired,
  }).isRequired,
};

export default PeopleListItem;
