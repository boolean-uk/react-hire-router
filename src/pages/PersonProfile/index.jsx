import { useEffect, useState } from 'react'
import HireForm from './components/HireForm'
import { useParams } from 'react-router-dom'

function PersonProfile(props) {
  const { setHiredPeople, hiredPeople, people} = props
  const [person, setPerson] = useState(null)
  const {id} = useParams()

  //Finding the person using the id from the url
  useEffect(() => {
    if(people && id){
      const matchingPerson = people.find((person) =>
      person.id.value === id)
      setPerson(matchingPerson)
      console.log(person)
      console.log(hiredPeople)
    }
  }, [people, id])

  if (!person) return <p>Loading...</p>

  return (
    <article>
      <h2>
        {person.name.first} {person.name.last}
      </h2>
      {/* Added some additional user info on the profile page */}
      <img src={person.picture.large}></img>
      <p>Gender: {person.gender}</p>
      <p>Age: {person.dob.age}</p>
      <p>Country: {person.location.country}</p>
      <p>City: {person.location.city}</p>
      <h3>Contact info:</h3>
      <ul>
        <p>Phone: {person.cell}</p>
        <p>Email: {person.email}</p>
      </ul>
      {/* Conditionally render the HireForm, if they are hired it won't show up */}
      {!hiredPeople.some((p) => p.id.value === person.id.value) &&
      (<HireForm person={person}
        hiredPeople={hiredPeople}
        setHiredPeople={setHiredPeople}
        />)}
    </article>
  )
}

export default PersonProfile
