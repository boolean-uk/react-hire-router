import PeopleListItem from './PeopleListItem'

function PeopleList(props) {
  const { people , editable, setHiredPeople} = props

  

  return (
    <ul>
      {people.map((person, index) => (
        // console.log(index)
        <PeopleListItem key={index} person={person} id={index} editable={editable} setHiredPeople={setHiredPeople} people={people}/>
      ))}
    </ul>
  )
}

export default PeopleList
