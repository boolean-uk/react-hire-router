import PeopleListItem from "./PeopleListItem";

function PeopleList(props) {
  const { people } = props;

  return (
    <ul>
      {people.map((person, index) => (
        <PeopleListItem key={index} keydata={index} person={person} />
      ))}
    </ul>
  );
}

export default PeopleList;
