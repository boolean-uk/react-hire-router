import { useState, useEffect } from "react"
import HireForm from "./components/HireForm"
import { useLocation, Link, useParams } from "react-router-dom"


function PersonProfile(props) {
  const [person, setPerson] = useState(props.person)
  const location = useLocation()
  const { id } = useParams()
  

  useEffect(()=>{
    if (location.state) {
      setPerson(location.state.person)
    }
  }, [id])
  

  if (!person) return <p>Loading...</p>

  return (
    <article>
      <h2>
      Name: {person.name.first} {person.name.last}
        
      </h2>
      <img src={person.picture.large}/>
      <p>Email: {person.email}</p>
      <p></p>
      
      <HireForm person={person} setHiredPeople={props.setHiredPeople} />
    </article>
  )
}

export default PersonProfile
