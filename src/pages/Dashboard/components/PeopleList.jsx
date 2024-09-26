import PeopleListItem from './PeopleListItem'

function PeopleList({people, removeOffer}) {

  if(people !== undefined && people !== false){
  return (
    <ul>
      {people.map((person, index) => (
        <PeopleListItem key={index} id = {person.id.value || index}person ={person} remove={()=>removeOffer(person)} />
      ))}
    </ul>
  )}else{
    return(<ul>
    </ul>) 
  }
}

export default PeopleList
