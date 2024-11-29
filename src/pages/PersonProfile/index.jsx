import { useEffect, useState } from 'react';
import HireForm from './components/HireForm';
import { useLocation, Link } from 'react-router-dom';

function PersonProfile(props) {
  const [person, setPerson] = useState(null)
  const location = useLocation()
  const people = location.state.people
  //console.log("profile props:", props)
  //console.log("thelist @ profile:", people)

  useEffect( () => {
    if (location.state)
      {setPerson(location.state.person)}
  }, [])

  if (!person) return <p>Loading...</p>

  return (
    <article>
      <h2>
        {person.name.title} {person.name.first} {person.name.last}
      </h2>
      <img src={person.picture.medium} />
      <ul>
        <li>Email: {person.email}</li>
        <li>Location: {person.location.city}, {person.location.country}</li>
        <li>Age: {person.dob.age}</li>
        {person.wage && <li>Wage: £{person.wage}</li>}
      </ul>
      <HireForm person={person} hirelist={props} people={people}/>
      <Link to={'/dashboard'} state={people}><button>Back to Dash</button></Link>
    </article>
  )
}

export default PersonProfile