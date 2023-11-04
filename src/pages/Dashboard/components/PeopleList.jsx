import PeopleListItem from "./PeopleListItem";

function PeopleList(props) {
  const { list, people } = props;
  return (
    <ul className="flex flex-col gap-4">
      {people.map((person, index) => (
        <PeopleListItem key={`${list}-${index}`} person={person} list={list} />
      ))}
    </ul>
  );
}

export default PeopleList;
