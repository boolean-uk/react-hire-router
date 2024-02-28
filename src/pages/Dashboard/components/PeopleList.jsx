import PeopleListItem from "./PeopleListItem";

function PeopleList(props) {
  console.log("props in PeopleList; ", props);
  const { people } = props;
  console.log("people in PeopleList: ", people);
  return (
    <ul>
      {people.map((person, index) => (
        <PeopleListItem key={index} person={person} />
      ))}
    </ul>
  );
}

export default PeopleList;
