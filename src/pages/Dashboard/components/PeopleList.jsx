import PeopleListItem from './PeopleListItem'


function PeopleList(props) {
  const { people } = props
  
  return (
    <ul>
      {people.map((person, index) => (
        <PeopleListItem key={index} person={person} handleHired={props.handleHired}/>
      ))}
    </ul>
  )
}

export default PeopleList
