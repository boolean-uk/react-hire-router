import { Link} from 'react-router-dom'


function PeopleListItem(props) {
  console.log("Inside PeopleListItem: ", { props });

  const { person } = props


  return (
    <li>
      <h3>
        {person.name.first} {person.name.last}
        <Link to={`/view/${person.name.first+person.name.last}`}>View Profile</Link>
      </h3>
      {person.wage && <p>Wage: {person.wage}</p>}
    </li>
  )
}

export default PeopleListItem
