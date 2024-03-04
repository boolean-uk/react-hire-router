import PeopleListItem from './PeopleListItem'

function PeopleList(props) {
  const { people } = props

  if (!people) {
    return (
      <>
        <p>Loading...</p>
        <button onClick={() => console.log(people)}>CLICK</button>
      </>
    )
  }

  return (
    <ul>
      {people.map((person, index) => (
        <PeopleListItem key={index} person={person} index={index} />
      ))}
    </ul>
  )
}

export default PeopleList
