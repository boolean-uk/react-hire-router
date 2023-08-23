import PeopleListItem from "./PeopleListItem"

function PeopleList(props) {
  const { people, isHired } = props;

  return (
    <ul>
      {people.map((person, index) => (
        <PeopleListItem key={index} person={person} isHired={isHired} />
      ))}
    </ul>
  );
}

export default PeopleList