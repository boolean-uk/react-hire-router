import PeopleListItem from "./PeopleListItem";

function PeopleList(props) {
  const { people } = props;
  // console.log("logging people inside PeopleList", people);

  return (
    <ul>
      {people != undefined
        ? people.map((person, index) => {
            console.log("this is index", index);
            return <PeopleListItem key={index} index={index} person={person} setHiredPeople={props.setHiredPeople} />;
          })
        : ""}
    </ul>
  );
}

export default PeopleList;
