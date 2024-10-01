/* eslint-disable react/prop-types */
import { useState, useEffect } from 'react'
import HireForm from './components/HireForm'
import { useNavigate, useParams } from 'react-router-dom'

function PersonProfile(props) {
  const [person, setPerson] = useState(null)
  const {people, setHiredPeople} = props
  const navigate = useNavigate()
  const {uuid} = useParams()


  
  const fetchPerson = () => {
    const pax = people.find((p) => p.login.uuid === uuid)
    if (pax !== null) {
      setPerson(pax)
    }
  }
  const hirePerson = (wage) => {
    const hiredPax = {... person, wage}
    setHiredPeople((prev) => [...prev, hiredPax])
    navigate("/")
  }
    

  useEffect(() => {
    fetchPerson()
  }, [uuid, people])


  const editedPerson = (wage) => {
    
  }
  if (!person) return <p>Loading...</p>

  return (
    <article>
      <h2>
        {person.name.first} {person.name.last}
      </h2>
      <HireForm person={person} onHire = {hirePerson}/>
    </article>
  )
}

export default PersonProfile
