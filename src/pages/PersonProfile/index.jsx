import { useState, useEffect } from 'react'
import HireForm from './components/HireForm'
import {useParams } from "react-router-dom";
import PropTypes from "prop-types";

function PersonProfile({hiredPeople, people, setHiredPeople, setPeople}) {
  const [person, setPerson] = useState(null)



  
  const { id } = useParams();

    useEffect(() => {

        if(people && id){
            const matchingPerson = people.find((person) => {
             return Number(person.id) === Number(id)
        })
            setPerson(matchingPerson)
        }
        
    }, [people, id])

    


  if (!person) return <p>Loading...</p>

  return (
    <article>
      <h2>
        {person.name.first} {person.name.last}
      </h2>
      <HireForm person={person} hiredPeople={hiredPeople} setHiredPeople={setHiredPeople} id={id} />
    </article>
  )
}

export default PersonProfile
PersonProfile.propTypes = {
  setHiredPeople: PropTypes.func
}