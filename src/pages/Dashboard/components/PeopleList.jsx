import PeopleListItem from './PeopleListItem'

function PeopleList({people, setHiredPeople}) {
  //const { people } = props

  return (
    <ul>
      {people.map((person, index) => (
        <PeopleListItem key={index} person={person} setHiredPeople={setHiredPeople} num={index}/>
      ))}
    </ul>
  )
}

export default PeopleList
