function PeopleListItem(props) {
  const { person } = props
  const wage = person.wage || 10000;

  return (
    <li>
      <h3>
        {person.name.first} {person.name.last}
      </h3>
      {person.wage && <p>Wage: £{wage}</p>}
      {console.log(person.wage)}
    </li>
  )
}

export default PeopleListItem
