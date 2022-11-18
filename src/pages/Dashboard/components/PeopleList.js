import PeopleListItem from "./PeopleListItem";

function PeopleList(props) {
  // props: either people or hiredPeople
  const { people } = props;
  console.log(props);

  return (
    <ul>
      {people
        ? people.map((person, index) => (
            <PeopleListItem key={index} person={person} />
          ))
        : null}
    </ul>
  );
}

export default PeopleList;
