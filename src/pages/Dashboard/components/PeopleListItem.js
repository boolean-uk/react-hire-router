function PeopleListItem(props) {
  const { person } = props
  return (
    <li>
      <h3>
        {person.name.first} {person.name.last}
      </h3>
      <p>{person.wage && <p>Wage: £{person.wage}</p>}</p>
    </li>
  )
}

export default PeopleListItem
