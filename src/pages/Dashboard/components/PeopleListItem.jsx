import PropTypes from "prop-types";
import { Link } from "react-router-dom";

function PeopleListItem(props) {
  const { person, isHired } = props;

  return (
    <li>
      <h3>
        ``
        <Link to={`/view/${person.login.uuid}`}>
          {person.name.first} {person.name.last}
        </Link>
      </h3>
      {isHired && <Link to={`/edit/${person.login.uuid}`}>Edit</Link>}
      {person.wage && <p>Wage: £{person.wage}</p>}
    </li>
  );
}

PeopleListItem.propTypes = {
  person: PropTypes.shape({
    login: PropTypes.shape({
      uuid: PropTypes.string.isRequired,
    }).isRequired,
    name: PropTypes.shape({
      first: PropTypes.string.isRequired,
      last: PropTypes.string.isRequired,
    }).isRequired,
    wage: PropTypes.number,
  }).isRequired,
  isHired: PropTypes.bool,
};

PeopleListItem.defaultProps = {
  isHired: false,
};

export default PeopleListItem;
