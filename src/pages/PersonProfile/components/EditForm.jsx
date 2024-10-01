import { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'

function EditForm({people, setHiredPeople, hiredPeople,  wage, setWage}) {
  const navigate = useNavigate()
  const [editPerson, setPerson] = useState(null)


  const {id} = useParams()

  useEffect(() => {
    setPerson(people.find(p => p.id === parseInt(id)))

  }, [])


  function handleSubmit(event) {    
    event.preventDefault()

    editPerson.wage = wage
    setHiredPeople([
        ...hiredPeople.slice(0, id - 1),
        editPerson,
        ...hiredPeople.slice(id + 1)
    ])
    console.log(hiredPeople)
    navigate('/')
    setWage(0)
  
  }

  if(!editPerson) return <h2>Loading...</h2>

  
  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="wage">Edit the wage</label>
      <input
        type="text"
        id="wage"
        name="wage"
        onChange={e => setWage(e.target.value)}
        value={wage}
      />
      <button type="submit">Edit</button>
    </form>
  )
}

export default EditForm

