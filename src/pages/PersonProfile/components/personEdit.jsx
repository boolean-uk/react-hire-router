import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import React from "react";

function PersonEdit({setHiredPeople, people}) {
    const{id} = useParams()
    const navigate = useNavigate()
    const [wage, setWage] = useState('')
    const [person, setPerson] = useState(null)



    useEffect(() => {
        const findPerson = people.find(p => p.login.uuid === id)
        if (findPerson) {
            setPerson(findPerson)
            setWage(findPerson.wage)
        }


    }, [id,people])



    const handleSubmit = (event) => {
        event.preventDefault()
        const updatedPeople = people.map(p => p.login.uuid === id ? {...p, wage} : p)
        setHiredPeople(updatedPeople.filter(p => p.wage))
        navigate('/')

    
    }

    if (!person) return <p> Loading... </p>

    return(
        <form onSubmit={handleSubmit}>
            <label htmlFor="wage"> Wage:</label>
            <input id="wage" type="text" value={wage} onChange={e => setWage(e.target.value)} />
            <button type="submit"> Update Wage</button>
        </form>

    )

}
export default PersonEdit