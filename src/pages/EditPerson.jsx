import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom'
import { useNavigate } from "react-router-dom";

function EditPerson(props) {
    const [personToUpdate, setPersonToUpdate] = useState(null);
    const { id } = useParams()
    const { hiredPeople, setHiredPeople } = props;
    const navigate = useNavigate();

    /**
    Wrapping the code in useEffect with dependencies [hiredPeople, id] ensures that the code inside the useEffect block 
    runs after the component mounts and whenever there are changes in the hiredPeople or id variables. 
    */
    useEffect(() => {
        if (hiredPeople && id) {
            const matchingPerson = hiredPeople.find((person) => person.login.uuid === id);
            setPersonToUpdate(matchingPerson);
        }
    }, [hiredPeople, id]);

    const indexOfObjectToReplace = hiredPeople.findIndex(person => person.login.uuid === id);

    function handleChange(event) {
        //const inputName = event.target.name;
        const inputValue = event.target.value;

        //uppdatera state variabeln person objektet med ny value på propertyn wage
        setPersonToUpdate((personToUpdate) => ({
            ...personToUpdate,
            wage: inputValue,
        }));
    }

    function handleSubmit(event) {
        console.log(personToUpdate)

        event.preventDefault();

        //skapa en ny lista från hiredPeople genom att ersätta det gamla objektet med det nya
        const updatedList = hiredPeople.map((person, index) =>
            index === indexOfObjectToReplace ? personToUpdate : person
        );

        //uppdatera hiredPeople att vara den nya listan
        setHiredPeople(updatedList)

        //navigera till dashboard
        navigate('/');
    }

    if (!personToUpdate) return <div>Loading...</div>;

    return (
        <form onSubmit={handleSubmit}>
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
