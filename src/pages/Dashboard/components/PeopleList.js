import PeopleListItem from "./PeopleListItem";

function PeopleList(props) {
  const { people } = props;

  return (
    <ul>
      {people ? (
        people.map((person, index) => (
          <PeopleListItem key={index} person={person} list={PeopleList} />
        ))
      ) : (
        <p>Loading...</p>
      )}
    </ul>
  );
}

export default PeopleList;
