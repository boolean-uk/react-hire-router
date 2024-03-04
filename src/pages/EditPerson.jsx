import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom'
import { useNavigate } from "react-router-dom";

function EditPerson(props) {
    const [personToUpdate, setPersonToUpdate] = useState(null);
    const { id } = useParams()
    const { hiredPeople, setHiredPeople } = props;
    const navigate = useNavigate();

    useEffect(() => {
        if (hiredPeople && id) {
            const matchingPerson = hiredPeople.find((person) => person.login.uuid === id);
            setPersonToUpdate(matchingPerson);
        }
    }, [hiredPeople, id]);

    function handleChange(event) {
        const inputName = event.target.name;
        const inputValue = event.target.value;

        if (inputName === 'firstName') {
            //uppdatera first name
            setPersonToUpdate({ ...personToUpdate, [inputName]: inputValue });
        }
        else if (inputName === 'lastName') {
            //uppdatera last name
            setPersonToUpdate({ ...personToUpdate, [inputName]: inputValue });
        }
        else if (inputName === 'wage') {
            setPersonToUpdate({ ...personToUpdate, [inputName]: inputValue });
        }
    }

    function handleSubmit(event) {
        event.preventDefault();

        const inputValue = event.target.value;

        //ersätt gammalt objekt med nytt objekt
        setHiredPeople((personToUpdate) => ({
            ...personToUpdate,
            wage: inputValue,
        }));

        /**nestad under name.last och name.first
        setHiredPeople((personToUpdate) => ({
            ...personToUpdate,
            name.first: inputValue,
        }))*/

        //navigera till dashboard
        navigate(-2);
    }

    if (!personToUpdate) return <div>Loading...</div>;

    return (
        <form onSubmit={handleSubmit}>
            <label htmlFor="firstName">First name</label>
            <input
                type="text"
                id="firstName"
                name="firstName"
                onChange={handleChange}
                value={personToUpdate.name.first}
            />
            <button type="submit">Update</button>

            <br />

            <label htmlFor="lastName">Last name</label>
            <input
                type="text"
                id="lastName"
                name="lastName"
                onChange={handleChange}
                value={personToUpdate.name.last}
            />
            <button type="submit">Update</button>

            <br />

            <label htmlFor="wage">Wage</label>
            <input
                type="text"
                id="wage"
                name="wage"
                onChange={handleChange}
                value={personToUpdate.wage}
            />
            <button type="submit">Update</button>
        </form>
    );
}

export default EditPerson;
