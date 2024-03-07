/* eslint-disable react/prop-types */
import PeopleListItem from './PeopleListItem'

export default function PeopleList(props) {
  const { people, handleHire, handleView } = props

  if (!people) {
    return <div>Loading...</div>
  }

  return (
    <ul>
      {people.map((person, index) => (
        <PeopleListItem key={index} person={person} handleHire={handleHire} handleView={handleView} />
      ))}
    </ul>
  )
}
