import PeopleListItem from "./PeopleListItem";

function PeopleList(props) {
  const { people, hiredPeople, setHiredPeople } = props;
  return (
    <ul>
      {people.map((person, index) => (
        <PeopleListItem
          key={index}
          person={person}
          hiredPeople={hiredPeople}
          setHiredPeople={setHiredPeople}
        />
      ))}
    </ul>
  );
}

export default PeopleList;
