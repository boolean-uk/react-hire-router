import PeopleListItem from './PeopleListItem'

function PeopleList(props) {
  const { people } = props

  if(!people) return(<p>loading...</p>)

  return (
    <ul>
      {people.map((person, index) => (
        <PeopleListItem key={index} person={person} editable={props.editable}/>
      ))}
    </ul>
  )
}

export default PeopleList
