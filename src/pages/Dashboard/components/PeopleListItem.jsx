import { Link } from "react-router-dom";

import PropTypes from "prop-types";

function PeopleListItem(props) {
  const { person, index } = props;

  return (
    <li>
      <h3>
        {person.name.first} {person.name.last}
      </h3>
      <Link to={`/view/${index}`}>View Profile</Link>
      {person.wage && <p>Wage: £{person.wage}</p>}
    </li>
  );
}

PeopleListItem.propTypes = {
  person: PropTypes.shape({
    name: PropTypes.shape({
      first: PropTypes.string.isRequired,
      last: PropTypes.string.isRequired,
    }).isRequired,
    id: PropTypes.shape({
      value: PropTypes.string.isRequired,
    }).isRequired,
    wage: PropTypes.number,
  }).isRequired,
  index: PropTypes.number.isRequired,
};

export default PeopleListItem;
