import PropTypes from "prop-types";
import { Link } from "react-router-dom";

function PeopleListItem({ person, index }) {
  return (
    <li>
      <h3>
        {person.name.first} {person.name.last}
      </h3>
      <Link to={`/view/${index}`}>View Profile</Link>
    </li>
  );
}

PeopleListItem.propTypes = {
  person: PropTypes.object.isRequired,
  index: PropTypes.number.isRequired,
};

export default PeopleListItem;
