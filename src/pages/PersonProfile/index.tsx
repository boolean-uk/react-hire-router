import { useEffect, useState } from 'react'
import HireForm from './components/HireForm'
import React from 'react'
import { useParams } from 'react-router-dom'

function PersonProfile(props) {
  const [person, setPerson] = useState(null)
  const {id } = useParams();
  const {people} = props;

  useEffect(() => {
    const selectedPerson = people.find(p => p.login.uuid === id); // Compare ids correctly
    setPerson(selectedPerson);
  }, [id, people]); // Update effect only on id or people change

  if (!person) return <p>Loading...</p>;

  console.log(person)
  console.log(id)

  if (!person) return <p>Loading...</p>

  return (
    <article>
      <h2>
        {person?.name?.first} {person?.name?.last}
      </h2>
      <HireForm person={person} hiredPeople={props.hiredPeople} setHiredPeople={props.setHiredPeople} Person={person} />
    </article>
    
  )
}

export default PersonProfile
