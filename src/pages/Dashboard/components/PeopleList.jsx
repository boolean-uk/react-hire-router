import PropTypes from "prop-types";
import PeopleListItem from "./PeopleListItem";

function PeopleList(props) {
  const { people } = props;

  return (
    <ul>
      {people.map((person, index) => (
        <PeopleListItem key={index} person={person} index={index} />
      ))}
    </ul>
  );
}

PeopleList.propTypes = {
  people: PropTypes.array.isRequired,
};

export default PeopleList;
