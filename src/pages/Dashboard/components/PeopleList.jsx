import PeopleListItem from './PeopleListItem'

function PeopleList(props) {
  const { people } = props

  if(!people) return(<p>loading...</p>)

  return (
    <ul>
      {people.map((person, index) => (
        <PeopleListItem key={index} person={person} />
      ))}
    </ul>
  )
}

export default PeopleList
