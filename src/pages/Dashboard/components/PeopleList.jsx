/* eslint-disable react/prop-types */
import PeopleListItem from "./PeopleListItem";

function PeopleList(props) {
  const { people, hired } = props;
  return (
    <ul>
      {people.map((person) => {
        return (
          <PeopleListItem
            key={person.login.uuid}
            person={person}
            id={person.login.uuid}
            hired={hired}
          />
        );
      })}
    </ul>
  );
}

export default PeopleList;
