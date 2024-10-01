/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */

import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import HireForm from './components/HireForm'

export default function PersonProfile({people, hiredPeople, setHiredPeople}) {
  const [person, setPerson] = useState(null)
  const { id } = useParams();

  useEffect(() => {
    if (people && id) {
      const match = people.find(p => p.login.uuid === id);
      setPerson(match);
    }
  }, [people, id])

  if (!person) return <p>Loading...</p>;

  
  return (
    <div className='person-item'>
      <h2>{person.name.title} {person.name.first} {person.name.last} </h2>
      <img src={person.picture.large} alt={`${person.name.first} ${person.name.last}`} />
      <p>{person.location.city}, {person.location.country}</p>
      <HireForm person={person} hiredPeople={hiredPeople} setHiredPeople={setHiredPeople} />
    </div>  
  )
}

