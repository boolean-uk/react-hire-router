 import { useState } from "react"

 function EditForm(props) {
    const [wage, setWage] = useState(0)
    function manageSubmit(event) {
        event.preventDefault()
        // eslint-disable-next-line react/prop-types
        props.onEdit(wage)
    }

    return (
        <form onSubmit={manageSubmit}>
            <label htmlFor='wage'>New Wage: </label>
            <input
                name='wage'
                id='wage'
                type = 'text'
                onChange={e => setWage(e.target.value)}
                value={wage}
            />
            {wage !== 0 && wage !== '' && wage[0] !== '-' && wage !== '0' ? <button type='submit'>Save new wage</button> : 
            <button type='submit'>Fire</button>}
        </form>
    )
 }export default EditForm