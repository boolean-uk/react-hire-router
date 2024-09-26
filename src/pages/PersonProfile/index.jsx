import { useState, useEffect } from 'react'
import HireForm from './components/HireForm'
import { useParams, useNavigate } from 'react-router-dom'
import EditForm from './components/EditForm'


function PersonProfile({peopleData, hirePerson}) {
  const {id} = useParams()
  const navigate = useNavigate()

  let temp = peopleData.find((person) => person.login.uuid == id)
  console.log(temp)

  if (!temp) navigate("/")

  const [person, setPerson] = useState(temp)

  if (!person) return <p>Loading...</p>

  

  useEffect(() => {
    console.log("Person:", person)
  }, [person])

  return (
    <article>
      <h2>
        {person.name.first} {person.name.last}
      </h2>
      {person.wage ? <EditForm person={person} /> : <HireForm person={person} hirePerson={hirePerson}/>}
    </article>
  )
}

export default PersonProfile
