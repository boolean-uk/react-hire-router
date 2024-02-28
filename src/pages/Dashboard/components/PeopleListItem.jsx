import PropTypes from "prop-types";
import { Link } from "react-router-dom";

function PeopleListItem({ person }) {
  return (
    <>
      <nav>
        <li>
          <h3>
            {person.name.first} {person.name.last}
          </h3>
          {person.wage && <p>Wage: £{person.wage}</p>}
          <Link to={`/view/${person.id}`}>View Profile</Link>
        </li>
      </nav>
    </>
  );
}

export default PeopleListItem;
PeopleListItem.propTypes = {
  person: PropTypes.object,
};
