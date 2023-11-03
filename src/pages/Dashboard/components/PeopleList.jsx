import PeopleListItem from "./PeopleListItem";

function PeopleList(props) {
  const { people } = props;

  return (
    <ul>
     {people ? people.map((person, index) => (
        <PeopleListItem key={index} person={person} />
      )) : 'no one has been hired yet'}
    </ul>
  );
}

export default PeopleList;
