import PeopleListItem from "./PeopleListItem"

function PeopleList({ people, handleEdit }) {

  return (
    <ul>
      {people.map((person, index) => (
        <PeopleListItem key={index} person={person} handleEdit={handleEdit} />
      ))}
    </ul>
  )
}

export default PeopleList
