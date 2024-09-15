function PeopleListItem(props) {
  const { person } = props

  return (
    <div>
      <h3>
        {person.name.title}. {person.name.first} {person.name.last}
      </h3>
      {person.wage && <p>Wage: £{person.wage}</p>}
    </div>
  )
}

export default PeopleListItem
