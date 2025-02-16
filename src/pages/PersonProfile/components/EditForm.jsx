import { useEffect, useState } from "react"
import { useNavigate, useParams } from "react-router-dom"

function EditForm(props) {
    const {hiredPeople, updateWage} = props
    const [wage, setWage] = useState(0)
    const [person, setPerson] = useState(null)
    const {id} = useParams()
    const navigate = useNavigate()

    useEffect(() => {
        const hiredPerson = hiredPeople.find(person => Number(person.id) === Number(id))
        if (hiredPerson) {
            setPerson(hiredPerson)
            setWage(hiredPerson.wage || 0)
        }
    }, [hiredPeople, id])

    if (!person) return <p>Loading...</p>

    function handleSubmit(event) {
        event.preventDefault()
        updateWage(person.id, wage)
        navigate('/')
    }

    return (
        <form onSubmit={handleSubmit}>
            <h2>Edit Wage for {person.name.first} {person.name.last}</h2>
            <label htmlFor="wage">Wage</label>
            <input
              type="text"
              id="wage"
              name="wage"
              value={wage}
              onChange={(e) => setWage(e.target.value)} />
            <button type="submit">Save Changes</button>
        </form>
    )
}

export default EditForm