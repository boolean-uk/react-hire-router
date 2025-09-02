import HiredListItem from './HiredListItem'

function HiredList(props) {
  
  const { people } = props

  return (
    <ul>
      {people.map((person, index) => (
        <HiredListItem key={index} person={person} />
      ))}
    </ul>
  )
}

export default HiredList
