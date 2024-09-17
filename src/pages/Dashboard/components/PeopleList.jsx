import PeopleListItem from "./PeopleListItem";
// Define the PeopleList component, which takes a prop called "people."
function PeopleList({ people }) {
  return (
    <ul>
      {people.map((person, index) => (
        <PeopleListItem key={index} person={person} />
      ))}
    </ul>
  );
}

export default PeopleList;
