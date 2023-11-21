import { useState, useEffect } from "react"
import { useLocation, useNavigate } from "react-router-dom"

function ProfileEdit({hiredPeople, setHiredPeople}) {
  const [person, setPerson] = useState(null)
  const location = useLocation()
  const navigate = useNavigate()

  useEffect(() => {
    if (!location.state) return
    const personData = location.state.person
    setPerson(personData)
  }, [location])

  if (!person) return <p>Loading...</p>

  const handleSubmit = event => {
    event.preventDefault()
    const updatedPeople = hiredPeople.map(item => {
      if (item.id.value === person.id.value) {
        return person
      } else {
        return item
      }
    })
    setHiredPeople(updatedPeople)
    navigate('/')
  }

  const handleChange = event => {
    const {name, value } = event.target
    if (name === 'firstName') {
      const update = {...person}
      update.name.first = value
      setPerson(update)
    }
    if (name === 'lastName') {
      const update = {...person}
      update.name.last = value
      setPerson(update)
    }
  }

  return (
    <article>
      <h2>Edit!</h2>
        <form onSubmit={handleSubmit}>
          <input type='text' name='firstName' placeholder={person.name.first} onChange={handleChange}/>
          <input type='text' name='lastName' placeholder={person.name.last} onChange={handleChange}/>
          <input type='submit' value="submit"/>
        </form>
    </article>
  )
}

export default ProfileEdit