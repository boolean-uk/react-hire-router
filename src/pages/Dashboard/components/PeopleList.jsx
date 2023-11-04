import PeopleListItem from "./PeopleListItem";

function PeopleList(props) {
  const { people } = props;
  return (
    <ul className="flex flex-col gap-4">
      {people.map((person, index) => (
        <PeopleListItem key={index} person={person}/>
      ))}
    </ul>
  );
}

export default PeopleList;
