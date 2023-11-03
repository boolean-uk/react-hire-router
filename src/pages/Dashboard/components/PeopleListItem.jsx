function PeopleListItem({ name, wage }) {
  
  return (
    <li>
      <h3>
        {name}
      </h3>
      {wage && <p>Wage: £{wage}</p>}
    </li>
  )
}

export default PeopleListItem
