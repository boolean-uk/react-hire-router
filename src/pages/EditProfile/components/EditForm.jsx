import { useState } from "react"
import { useNavigate } from "react-router-dom"


function EditForm(props) {
    const {hiredPeople, setHiredPeople, person} = props
    const [wage, setWage] = useState(0)
    const navigate = useNavigate()

    function handleSubmit(event) {
        event.preventDefault()
        const findPersonIndex = hiredPeople.findIndex((p) => p.id.value === person.id.value)
        //using the index to update the current persons wage
        const updateHiredPeople = hiredPeople.map((per, index) => {
            if(index === findPersonIndex){
                return {...per, wage: wage}
            }
            return per
        })
        //updating the entire hiredPeople list
        setHiredPeople(updateHiredPeople)
        console.log(hiredPeople)
        //route back to the home the page
        navigate("/")
      }
    return(
        <form onSubmit={handleSubmit}>
            <label htmlFor="wage">Edit wage</label>
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