import HireForm from './components/HireForm'
import PropTypes from 'prop-types';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom'

function PersonProfile({people, setHiredPeople, hiredPeople, wage, setWage}) {
  const [person, setPerson] = useState(null)

  const { id } = useParams()

  useEffect(() => {
    setPerson(people.find(p => p.id === parseInt(id)))
  }, [])

  if(!person) return <h3>Loading...</h3>

  return (
    <article>
      <h2>
        {person.name.first}
      </h2>
      <HireForm person={person} setHiredPeople={setHiredPeople} hiredPeople={hiredPeople} wage={wage} setWage={setWage}/>
    </article>
  )
}

export default PersonProfile

PersonProfile.propType = {
  person: PropTypes.array,
}