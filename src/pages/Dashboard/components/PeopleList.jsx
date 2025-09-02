import PeopleListItem from './PeopleListItem'

function PeopleList({ people, hiredPeople }) {
  return (
    <div style={{ display: 'flex', gap: '2rem' }}>
      <ul>
        <h2>All People</h2>
        {people.map(person => (
          <PeopleListItem key={person.login.uuid} person={person} />
        ))}
      </ul>

      <ul>
        <h2>Hired People</h2>
        {hiredPeople.map(person => (
          <li key={person.login.uuid}>
            {person.name.first} {person.name.last} - £{person.wage}
          </li>
        ))}
      </ul>
    </div>
  )
}

export default PeopleList
