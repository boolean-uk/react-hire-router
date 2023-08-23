import { useState, useEffect } from "react"
import { useParams, useNavigate} from "react-router-dom"

// new component so that the editing is splitted. Same lay-out but with input to edit
function EditPersonProfile({ people, onSave }) {
  const { uuid } = useParams();
  const navigate = useNavigate();
  const [personToEdit, setPersonToEdit] = useState(null)

  //loading data
  useEffect(() => {
    const foundPerson = people.find(p => p.login.uuid === uuid)
    setPersonToEdit(foundPerson)
  }, [uuid, people])
//handle form
  function handleSubmit() {
    onSave(personToEdit)
    navigate('/')
  }

  if (!personToEdit) return <p>Loading...</p>

  //all the edible content

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>First Name:</label>
        <input 
          value={personToEdit.name.first} 
          onChange={e => setPersonToEdit({ ...personToEdit, name: { ...personToEdit.name, first: e.target.value } })}
        />
      </div>
      <div>
        <label>Last Name:</label>
        <input 
          value={personToEdit.name.last} 
          onChange={e => setPersonToEdit({ ...personToEdit, name: { ...personToEdit.name, last: e.target.value } })}
        />
      </div>
      <div>
        <label>Email:</label>
        <input 
          value={personToEdit.email} 
          onChange={e => setPersonToEdit({ ...personToEdit, email: e.target.value })}
        />
      </div>
      <div>
        <label>Location:</label>
        <input 
          value={`${personToEdit.location.street.number} ${personToEdit.location.street.name}, ${personToEdit.location.city}, ${personToEdit.location.state}`} 
          onChange={e => {
            // Extracting for more simpeler
            const [city, state] = e.target.value.split(',').map(item => item.trim());
            setPersonToEdit({ ...personToEdit, location: { ...personToEdit.location, city, state } });
          }}
        />
      </div>
      <div>
        <label>Phone:</label>
        <input 
          value={personToEdit.phone} 
          onChange={e => setPersonToEdit({ ...personToEdit, phone: e.target.value })}
        />
      </div>
      <div>
        <label>Wage:</label>
        <input 
          type="number"
          value={personToEdit.wage || ''} 
          onChange={e => setPersonToEdit({ ...personToEdit, wage: e.target.value })}
        />
      </div>
      <div>
        <button type="submit">Save Changes</button>
      </div>
    </form>
  )
}


export default EditPersonProfile