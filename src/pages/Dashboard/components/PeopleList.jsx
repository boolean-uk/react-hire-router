import PeopleListItem from "./PeopleListItem"

function PeopleList({ people, isHiredList}) {
  return (
    <ul>
      {people.map((person, index) => (
        <PeopleListItem key={index} person={person} isHiredList={isHiredList} />
      ))}
    </ul>
  )
}

export default PeopleList