import PeopleListItem from './PeopleListItem'

function PeopleList({people, isHired}) {
  
  return (
    <ul>
      {people.map((person, index) => (
        <PeopleListItem key={index} person={person} isHired={isHired}/>
      ))}
    </ul>
  )
}

export default PeopleList
