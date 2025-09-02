/* eslint-disable react/prop-types */
function PeopleListItem(props) {
  const { person } = props

  return (
    <li>
      <img src={person.picture.medium} />
      <h3>
        {person.name.title} {person.name.first} {person.name.last}
      </h3>
      {person.wage && <p>Wage: £{person.wage}</p>}
    </li>
  )
}

export default PeopleListItem
