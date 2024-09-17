import { useNavigate } from "react-router-dom";
import PropTypes from "prop-types";

function PeopleListItem(props) {
  const { person } = props;
  const navigate = useNavigate();

  return (
    <li>
      <h3>
        {person.name.first} {person.name.last}
      </h3>
      {person.wage > 0 && <p>Wage: £{person.wage}</p>}
      <button
        onClick={() => {
          navigate(`/view/${person.login.uuid}`);
        }}
      >
        {person.wage > 0 ? "Edit" : "View profile"}
      </button>
    </li>
  );
}

export default PeopleListItem;

PeopleListItem.propTypes = {
  person: PropTypes.object,
};
