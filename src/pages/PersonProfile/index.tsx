import { useState, useEffect } from 'react'
import HireForm from './components/HireForm'
import { useParams } from 'react-router-dom'

function PersonProfile(props: any) {
    const [person, setPerson] = useState<any>()
    const { people } = props
    const { id } = useParams()

    useEffect(() => {
        if (people && id) {
            const matchingPerson = people.find(
                (person: any) => String(person.email) === String(id)
            )
            console.log('INFO: Found a matching person')
            setPerson(matchingPerson)
        } else {
            console.error('ERROR: Did not find matching person')
        }
    }, [people, id])

    return person ? (
        <article>
            <h2>
                {person.name.first} {person.name.last}
            </h2>
            <HireForm
                person={person}
                hiredPeople={props.hiredPeople}
                setHiredPeople={props.setHiredPeople}
            />
        </article>
    ) : (
        <p>...Loading</p>
    )
}

export default PersonProfile
