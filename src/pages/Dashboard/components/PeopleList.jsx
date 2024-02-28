import PeopleListItem from "./PeopleListItem";
import PropTypes from "prop-types";
function PeopleList({ people }) {
  return (
    <ul>
      {people && people.length > 0 ? (
        people.map((person) => <PeopleListItem person={person} key={person} />)
      ) : (
        <li>No users available</li>
      )}
    </ul>
  );
}

export default PeopleList;

PeopleList.propTypes = {
  people: PropTypes.arrayOf(PropTypes.object),
};
