import {Form, Link} from 'react-router-dom'
import PeopleListItem from "./PeopleListItem"
import "../peopleList.css"

function PeopleList(props) {
  const { people,hiredPeople, setHiredPeople } = props

  const handleFire = (event) =>{
    console.log(hiredPeople)
    console.log(event.target.value)
    setHiredPeople(hiredPeople.filter((person,index) => index != event.target.value))
  }

  return (
    <ul>
      {people.map((person, index) => (
        <div className='person-box'>
          <img src={person.picture.large} alt={person.name.first} className='person-image'/>
          <PeopleListItem className='person-details' key={index} person={person} />
          <div className='buttons'>
          <Link to={`/view/${person.id.value}`} state={{person}}>
            <button className='edit-button'>Edit</button>
          </Link>
          {person.wage && <button className='fire-button' value={index} onClick={handleFire}>Fire</button>}
          </div>
        </div>
      ))}
    </ul>
  )
}

export default PeopleList
