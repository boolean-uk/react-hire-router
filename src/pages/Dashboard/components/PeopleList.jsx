import PeopleListItem from './PeopleListItem'


function PeopleList(props) {
  const { people } = props

  return (
    <ul>
      {people.map((person, index) => (           
          <PeopleListItem key={index} person={person} ind={index}/>                 
      ))}
    </ul>
  )
}

/**
 * 
 */

export default PeopleList
