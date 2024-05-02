import { useEffect, useState } from 'react'
import HireForm from './components/HireForm'
import { useParams } from 'react-router-dom'

function PersonProfile(props) {
  const [person, setPerson] = useState(null)
  const { uuid } = useParams()

  useEffect(() => {
    fetch('https://randomuser.me/api/?results=50')
      .then(res => res.json())
      .then(p => {
        const personProfile = p.results.find(profile => profile.uuid === uuid)
        setPerson(personProfile)
      })
  }, [uuid])

  if (!person) return <p>Loading...</p>

  return (
    <article>
      <h2>
        {person.name.first} {person.name.last}
      </h2>
      <HireForm person={person} hire={props.hire} />
    </article>
  )
}

export default PersonProfile
