import { useNavigate } from "react-router-dom";
import PropTypes from "prop-types";

function PeopleListItem(props) {
  const navigate = useNavigate();
  const { person } = props;
  return (
    <li className="people-list-item">
      <div
        onClick={() => {
          if (!props.person.hired) {
            navigate(`people/${props.id || props.person.id}`);
          } else {
            // Navigate to a different link if person is not hired
            navigate(`hired/${props.id || props.person.id}`);
          }
        }}
      >
        <img src={person.picture.thumbnail} alt="thumbnail" />
        <h3>
          {person.name.title}. {person.name.first} {person.name.last}
        </h3>
        <p>{person.gender}</p>
        <p>{person.email}</p>
        {person.wage ? <p>Wage: {person.wage}</p> : null}
      </div>
      <div>
        {props.isHiredItem && (
          <button onClick={() => navigate(`people/${person.id}/edit`)}>
            Edit
          </button>
        )}
      </div>
    </li>
  );
}

PeopleListItem.propTypes = {
  person: PropTypes.object.isRequired,
  id: PropTypes.string,
  isHiredItem: PropTypes.bool,
};
export default PeopleListItem;
