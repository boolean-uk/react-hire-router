import PeopleListItem from "./PeopleListItem";

function PeopleList(props) {
  const { person } = props;

  return (
    <ul>
      {person.map((person, index) => (
        <PeopleListItem key={index} person={person} />
      ))}
    </ul>
  );
}

export default PeopleList;
