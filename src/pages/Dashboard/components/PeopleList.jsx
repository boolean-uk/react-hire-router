/* eslint-disable react/prop-types */
import PeopleListItem from "./PeopleListItem";

function PeopleList(props) {
  const { people, edit } = props;

  if (!people) {
    return (<div>Loading...</div>)
  }

  return (
    <ul>
      {people.map((person, index) => (
        <PeopleListItem key ={index} index={index} person={person} edit={edit} />
      ))}
    </ul>
  );
}

export default PeopleList;
