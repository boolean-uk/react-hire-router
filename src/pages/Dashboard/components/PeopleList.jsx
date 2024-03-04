import PeopleListItem from "./PeopleListItem";

import PropTypes from "prop-types";

function PeopleList(props) {
  const { people } = props;
  return (
    <ul className="people-list">
      {people.map((person, index) => (
        <PeopleListItem
          key={index}
          person={person}
          id={index}
          isHiredItem={props.isHiredList}
        />
      ))}
    </ul>
  );
}

PeopleList.propTypes = {
  people: PropTypes.array.isRequired,
  isHiredList: PropTypes.bool,
};

export default PeopleList;
