import PeopleListItem from "./PeopleListItem";
import PropTypes from "prop-types";

function PeopleList(props) {
  const { people } = props;
  // The PeopleList component receives the people as props
  // It returns a list of PeopleListItem components
  return (
    <ul>
      {people.map((person, index) => (
        <li key={index} style={{ liststyle: "none" }}>
          <PeopleListItem key={index} person={person} />
        </li>
      ))}
    </ul>
  );
}

PeopleList.propTypes = {
  people: PropTypes.array,
};

export default PeopleList;
