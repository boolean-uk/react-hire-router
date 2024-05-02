import PeopleListItem from './PeopleListItem'

function PeopleList({ people, editButton }) {
  return (
    <>
      {people && 
      <ul>
        {people.map((person, index) => (
          <PeopleListItem key={index} person={person} editButton={editButton}/>
        ))}
      </ul>}
    </>

    
  )
}

export default PeopleList
