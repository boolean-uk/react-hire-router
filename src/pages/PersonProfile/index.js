import { useState, useEffect } from "react"
import HireForm from "./components/HireForm"
import { useLocation } from 'react-router-dom'


function PersonProfile(props) {

  const location = useLocation()


  const [person, setPerson] = useState(location.state.person)


  if (!person) return <p>Loading...</p>



  return (
    <article>
      <h2>
        {person.name.first} {person.name.last}
      </h2>
      <HireForm person={person} />
    </article>
  )
}

export default PersonProfile
