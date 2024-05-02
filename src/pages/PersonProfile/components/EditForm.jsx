import { useEffect, useState } from "react"
import { useNavigate, useParams } from "react-router-dom"
import DeleteForm from "./DeleteForm"

export default function EditForm({ hiredPeople, setHiredPeople, wage, setWage }) {
    const [person, setPerson] = useState(null)
    const params = useParams()
    const navigate = useNavigate()

    useEffect(() =>{
        const someone = hiredPeople.find(p => p.index === Number(params.index))
        setPerson(someone)
    }, [hiredPeople, params.index])

    if (!person) return <p>Loading...</p>
    
    function handleSubmit(event) {
        event.preventDefault()

        person.wage = wage
        setHiredPeople([
            ...hiredPeople.slice(0, Number(params.index) - 1),
            person,
            ...hiredPeople.slice(Number(params.index))
        ])
        navigate('/dashboard')
        setWage(0)
    }

    return (
        <article>
          <h2>
            {person.name.first} {person.name.last}
          </h2>
          <form onSubmit={handleSubmit}>
                <label htmlFor="wage">Wage Offer</label>
                <input
                    type="text"
                    id="wage"
                    name="wage"
                    onChange={e => setWage(e.target.value)}
                    value={wage}
                />
                <button type="submit">Save</button>
            </form>
            <DeleteForm hiredPeople={hiredPeople} setHiredPeople={setHiredPeople} />
        </article>
      )
}