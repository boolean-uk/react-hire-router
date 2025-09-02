
/* eslint-disable react/prop-types */
import { Link, useNavigate } from 'react-router-dom'

function PeopleListItem({ person = null, link = true, remove = false, setHiredPeople }) {

  const navigate = useNavigate()
  const onRemove = () => {
    setHiredPeople(prev => prev.filter(x => x !== person))
  }

  const onEdit = () => {
    navigate(`/personProfile/${person.id.value}`)
  }

  return (
    <li className="profiles">
      <img 
        className="profile-image"
        src={person.picture.large}
        alt="No picture"
      />
      <h3>
        {person.name.first} {person.name.last}
      </h3>
      {person.wage ? <h4>Wage: {person.wage}</h4> : <></>}
      {link ? <Link to={`/personProfile/${person.id.value}`}>See profile</Link> : <></>}
      {remove 
        ? 
        <div className="buttons">
          <button onClick={onRemove}>Remove</button>
          <button onClick={onEdit}>Edit</button>
        </div>
        : 
        <></>
      }
    </li>
  )
}

export default PeopleListItem
