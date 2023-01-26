import PeopleListItem from "./PeopleListItem"

function PeopleList(props) {
  const { people } = props
  console.log("logging people inside PeopleList", people)

  return (
    <ul>
      {people.map((person, index) => (
        <PeopleListItem key={index} person={person} />
      ))}
    </ul>
  )
}

export default PeopleList
