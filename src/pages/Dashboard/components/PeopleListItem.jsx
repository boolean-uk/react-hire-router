import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { useState } from "react";
import HireForm from "../../PersonProfile/components/HireForm";

function PeopleListItem({ person, onHire }) {
  const [isEditing, setIsEditing] = useState(false);

  return (
    <li>
      <h3>
        <Link to={`/view/${person.login.uuid}`}>
          {person.name.first} {person.name.last}
        </Link>
      </h3>
      {person.wage && <p>Wage: £{person.wage}</p>}
      {person.wage ? (
        <button onClick={() => setIsEditing(true)}>Edit</button>
      ) : null}
      {isEditing ? <HireForm person={person} onSubmit={onHire} /> : null}
    </li>
  );
}

PeopleListItem.propTypes = {
  person: PropTypes.object.isRequired,
  onHire: PropTypes.func.isRequired,
};

export default PeopleListItem;
