import { useState, useEffect } from 'react'
import { useNavigate, useParams } from 'react-router-dom'

function PersonEdit(props) {
    const [person, setPerson] = useState(null)
    const { id } = useParams()
    const { hiredPeople, setHiredPeople } = props
    const [ newWage, setNewWage ] = useState('')
    
    let navigate = useNavigate()
  
    useEffect(() => {
      if (hiredPeople && id) {
        const matchingPerson = hiredPeople.find((person) =>
        person.login.uuid === id)
        setPerson(matchingPerson)
      }
    }, [hiredPeople, id])
  
    if (!person) return <p>Loading...</p>

    /* Setting new wages */
    const handleChange = (event) => {
        setNewWage(event.target.value)
    }

    const handleSubmit = (event) => {
        event.preventDefault()
        const updatedHiredPeople = hiredPeople.map(
            (hiredPerson) => hiredPerson.login.uuid === person.login.uuid ? {...hiredPerson, wage: newWage} : hiredPerson
        )
        setHiredPeople(updatedHiredPeople)
        navigate("/")
    }

    return(
        <>
        <h2>Edit Wage for {person.name.first} {person.name.last}</h2>
        <p>Current wage: £{person.wage}</p>
        <form onSubmit={handleSubmit}>
            <label htmlFor="wage-input">New wage: </label>
            <input id="wage-input" type="text" onChange={handleChange}/>
            <button>Save changes</button>
        </form>
        </>
    )
}

export default PersonEdit