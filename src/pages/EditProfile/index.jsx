import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import EditForm from "./components/EditForm"
function EditProfile(props) {
    const { setHiredPeople, hiredPeople} = props
    const [person, setPerson] = useState(null)
    const {id} = useParams()

    useEffect(() => {
        if(hiredPeople && id){
            const matchingPerson = hiredPeople.find((person) =>
            person.id.value === id)
            if(matchingPerson){
                setPerson(matchingPerson)
                console.log(person)
                console.log(hiredPeople)
            }
        }
    }, [hiredPeople, id])

    return(
        <article>
            {/* Making sure that the person one is trying to update is not null because of asynchronous rendering */}
            {person && (
                <>
                    <h2>
                        {person.name.first} {person.name.last}
                    </h2>
                    <EditForm
                        person={person}
                        hiredPeople={hiredPeople}
                        setHiredPeople={setHiredPeople}
                        setPerson={setPerson}
                    />
                </>
            )}
        </article>
    )
}

export default EditProfile