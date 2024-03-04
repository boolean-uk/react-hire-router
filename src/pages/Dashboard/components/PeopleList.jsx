import PeopleListItem from './PeopleListItem'

function PeopleList(props) {
  const { people } = props

  if (!people) {
    return (
      <>
        <p>Loading...</p>
      </>
    )
  }

  if(people.length === 0){
    return (
      <>
        <p>No people in list!</p>
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
