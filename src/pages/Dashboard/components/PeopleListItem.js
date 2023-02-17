import { Link } from 'react-router-dom'

const PeopleListItem = (props) => {
  const { person } = props

  return (
    <li className='person'>
      {/* <div className='image'>
        <img src={person.picture.large} alt="please don't see me"/>
      </div> */}
      <div className='info'>
        <h3>
          {person.name.first} {person.name.last}
        </h3>
        <p>Age: {person.dob.age}</p>
        <ul>
          Located in:
          <li>{person.location.city}, <span>{person.location.postcode}</span></li>
          <li>{person.location.country}</li>
        </ul>
        <ul>
          Contact:
          <li>Email:  {person.email}</li>
          <li>Phone: {person.phone}</li>
        </ul>
        {person.wage && <p>Wage: £{person.wage}</p>}
        {person.wage && <Link to={`/edit/${person.login.uuid}`} state={{ person }}> <div>Edit</div> </Link>}
        {!person.wage && <Link to={`/view/${person.login.uuid}`} state={{ person }}> <div>View</div> </Link>}
      </div>
    </li>
  )
}

export default PeopleListItem
