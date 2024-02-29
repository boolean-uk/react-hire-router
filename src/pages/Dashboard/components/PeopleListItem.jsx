import { Link } from "react-router-dom";

import PropTypes from "prop-types";

function PeopleListItem(props) {
  const { person } = props;

  // The PeopleListItem component receives the person as props
  // It returns a list of people with a link to their profile
  return (
    <>
      <h3>
        <Link to={`/view/${person.login.uuid}`}>
          {person.name.first} {person.name.last}
        </Link>
      </h3>
      {person.wage && <p>Wage: £{person.wage}</p>}
    </>
  );
}

PeopleListItem.propTypes = {
  person: PropTypes.object,
};

export default PeopleListItem;
