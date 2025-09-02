function PeopleListItem({person, goToProfile}) {

  return (
    <div onClick={() => goToProfile(person)}>
      <li>
        <h3>
          {person.name.first} {person.name.last}
        </h3>
        {person.wage && <p>Wage: £{person.wage}</p>}
      </li>
    </div>
  )
}

export default PeopleListItem
