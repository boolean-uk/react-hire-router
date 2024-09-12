import { useEffect, useState } from 'react'
import HireForm from './components/HireForm'
import { useParams } from 'react-router-dom'
import PropTypes from "prop-types"

function PersonProfile(props) {
  const {people, hirePeople, firePerson} = props
  const [person, setPerson] = useState(null)

  const params = useParams()

  useEffect(() => {
    const thisPerson = people.find((x) => {return `${x.id.value}` === `${params.id}`})
    setPerson(thisPerson)
  },[params, people])



  if (!person) return <p>Loading...</p>
  return (
    <article>
      <h2>
        {person.name.first} {person.name.last}
      </h2>
      <HireForm person={person} hirePerson = {hirePeople} firePerson = {firePerson}/>
    </article>
  )
}
PersonProfile.propTypes = {
  people: PropTypes.array,
  hirePeople: PropTypes.func
}

export default PersonProfile
