import { useState, useEffect } from "react"
import HireForm from "./components/HireForm"
import { useLocation } from "react-router-dom"
import { useNavigate } from "react-router-dom"

function PersonProfile(props) {
  const [person, setPerson] = useState(null)
  
  const location = useLocation()
  const navigate = useNavigate()
  console.log(location)

  useEffect(() => {
    setPerson(location.state)
  },[])
  
  const addhiredPeople = () => {
    const hiredPerson = { ...person}
    props.setHiredPeople([ ...props.hiredPeople, hiredPerson ])
    navigate('/Dashboard')
  }

  // this can be used to counter undefined error
  if (!person) return <p>Loading...</p>

  return (
    <article>
          <h2>
            {person.name.first} {person.name.last} 
          </h2>
      <HireForm person={person} addhiredPeople={addhiredPeople}/>
    </article>
  )
}

export default PersonProfile
