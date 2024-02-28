import PropTypes from "prop-types";
import PeopleListItem from "./PeopleListItem";

function PeopleList(props) {
  const { people, isHired } = props;

  return (
    <ul>
      {people.map((person, index) => (
        <PeopleListItem key={index} person={person} isHired={isHired} />
      ))}
    </ul>
  );
}

PeopleList.propTypes = {
  people: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.shape({
        first: PropTypes.string.isRequired,
        last: PropTypes.string.isRequired,
      }).isRequired,
      login: PropTypes.shape({
        uuid: PropTypes.string.isRequired,
      }).isRequired,
      wage: PropTypes.number,
    })
  ).isRequired,
  isHired: PropTypes.bool,
};

PeopleList.defaultProps = {
  isHired: false,
};

export default PeopleList;
