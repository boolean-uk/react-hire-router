import PeopleListItem from './PeopleListItem'

function PeopleList(props) {
  const { people } = props

  if (!people) return <div>No hired people yet</div>

  return (
    <ul>
      {people.map((person, index) => (
        <PeopleListItem key={index} person={person} />
      ))}
    </ul>
  )
}

export default PeopleList
