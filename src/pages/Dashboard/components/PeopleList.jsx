import PeopleListItem from "./PeopleListItem";
import PropTypes from "prop-types";

function PeopleList(props) {
  const { list, people } = props;
  return (
    <ul className="flex flex-col gap-4">
      {people.map((person, index) => (
        <PeopleListItem key={`${list}-${index}`} person={person} list={list} />
      ))}
    </ul>
  );
}

PeopleList.propTypes = {
  list: PropTypes.string,
  people: PropTypes.arrayOf(PropTypes.object),
};

export default PeopleList;
