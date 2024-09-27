/* eslint-disable react/prop-types */
export default function PeopleListItem(props) {
  const { person, handleHire, handleView } = props

  if (!person || !person.name) {
    return null
  }
  
  return (
    <li>
      <h3>
        {person.name.first} {person.name.last}
      </h3>
      <p>Wage: £{person.wage || null }</p>
      <button onClick={() => handleHire(person)}>Hire</button>
      <button onClick={() => handleView(person.login.username)}>Edit Profile</button>
      <button onClick={() => handleView(person.login.uuid)}>View Profile</button>
     
    </li>
  )
}