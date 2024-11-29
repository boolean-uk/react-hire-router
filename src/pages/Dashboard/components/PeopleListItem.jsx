import PropTypes from 'prop-types'
import { Link, } from 'react-router-dom'

function PeopleListItem(props) {
  let { person, id } = props
  
  if(id === null) {
    id = person.name.first + person.name.last
  }

  const link = `/view/${id}`
  const editLink = `/edit/${id}`

  if(person.wage !== undefined) {
    return (
      <li>
          <h3>
            {person.name.first} {person.name.last}
          </h3>
          {person.wage && <div><p>Wage: £{person.wage}</p></div>}
          {person.wage && <Link to={editLink}><button>edit</button></Link>}
          
      </li>
    )
  } else {
    return (
      <Link to={link}>
      <li>
          <h3>
            {person.name.first} {person.name.last}
          </h3>
          {person.wage && <p>Wage: £{person.wage}</p>}
          {person.wage && <button>edit</button>}
          
      </li>
      </Link>
    )
  }

}

PeopleListItem.propTypes = {
  id: PropTypes.string.isRequired,
  person: PropTypes.object.isRequired
}

export default PeopleListItem
