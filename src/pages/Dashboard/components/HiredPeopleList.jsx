import HiredPeopleListItem from './HiredPeopleListItem'


function HiredPeopleList(props) {
  const { people } = props
  
  return (
    <ul>
      {people.map((person, index) => (
        <HiredPeopleListItem key={index} person={person} handleHired={props.handleHired}/>
      ))}
    </ul>
  )
}

export default HiredPeopleList