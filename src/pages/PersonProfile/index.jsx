/* eslint-disable no-unused-vars */
import { useEffect, useState } from 'react'
import HireForm from './components/HireForm'
import { useLocation } from 'react-router-dom'

function PersonProfile(props) {
  const [person, setPerson] = useState(null)
  const location = useLocation()
  console.log(person)


  useEffect(() => {
    if (location) {
      setPerson(location.state)
    } else if (!person) {
      return <p>Loading...</p>
    }
  }, [location, person])


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
