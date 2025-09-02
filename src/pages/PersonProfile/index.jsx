/* eslint-disable react/prop-types */
import {useParams } from "react-router-dom";

import HireForm from './components/HireForm'

function PersonProfile({people, hirePerson}) {
  const { id } = useParams()
  const person = people.find((x) => x.login.uuid === id)


  if (!person) return <p>Loading...</p>

  return (
    <article>
       <img src={person.picture.large} />
      <h2>
        {person.name.first} {person.name.last}
      </h2>
      <p>Gender: {person.gender}</p>
      <p>Age: {person.dob.age}</p>
      <p>Phone: {person.phone}</p>
      <p>Cell: {person.cell}</p>
      <p>Adress:{person.location.street.number} {person.location.street.name} , {person.location.city}, {person.location.country}</p>
      <HireForm person={person} hirePerson={hirePerson}/>
    </article>
  )
}

export default PersonProfile
