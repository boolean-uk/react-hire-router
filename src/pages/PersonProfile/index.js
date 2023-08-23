import { useState, useEffect } from "react"
import HireForm from "./components/HireForm"
import { Link, useLocation } from "react-router-dom"

function PersonProfile(props) {
  const [person, setPerson] = useState(null)
  
  // const location = useLocation()

  if (!person) return <p>Loading...</p>
  if (!person) console.log('this shows something')

  return (
    <article>
      {/* <Link to={`/person/${person.email}`} state={person} > */}
          <h2>
            {person.name.first} {person.name.last}
          </h2>
      <HireForm person={person} />
    </article>
  )
}

export default PersonProfile
