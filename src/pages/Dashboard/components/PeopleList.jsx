import PeopleListItem from "./PeopleListItem";
import PropTypes from "prop-types";

function PeopleList({ people, onHire }) {
  return (
    <ul>
      {people.map((person, index) => (
        <PeopleListItem key={index} person={person} onHire={onHire} />
      ))}
    </ul>
  );
}

PeopleList.propTypes = {
  people: PropTypes.array.isRequired,
  onHire: PropTypes.func.isRequired,
};

export default PeopleList;
