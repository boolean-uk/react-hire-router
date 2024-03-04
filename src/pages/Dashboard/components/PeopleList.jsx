/* eslint-disable react/prop-types */
import PeopleListItem from "./PeopleListItem";

function PeopleList(props) {
  const { people, hired } = props;
  return (
    <ul>
      {people.map((person, index) => {
        return (
          <PeopleListItem
            key={index}
            person={person}
            id={index}
            hired={hired}
          />
        );
      })}
    </ul>
  );
}

export default PeopleList;
