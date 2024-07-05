import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

function HireForm(props: any) {
    const [wage, setWage] = useState('')
    const navigate = useNavigate()

    function handleSubmit(event: any) {
        event.preventDefault()
        const newHiredPeople = [
            {
                ...props.person,
                wage: parseInt(wage),
            },
            ...props.hiredPeople,
        ]
        props.setHiredPeople(newHiredPeople)
        return navigate('/')
    }

    return (
        <form onSubmit={handleSubmit}>
            <label htmlFor='wage'>Wage Offer</label>
            <input
                type='number'
                id='wage'
                name='wage'
                onChange={(e) => setWage(e.target.value)}
                value={wage}
            />
            <button type='submit'>Hire</button>
        </form>
    )
}

export default HireForm
