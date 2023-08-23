import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

function HireForm(props) {
    const { person, hiredPeople, setHiredPeople, editMode, people, setPeople } =
        props;
    const [wage, setWage] = useState(editMode ? person.wage : 0);
    const navigate = useNavigate();

    useEffect(() => {
        if (person && editMode) {
            const existingPerson = hiredPeople.find(
                (p) => p.login.uuid === person.login.uuid
            );
            if (existingPerson) {
                setWage(existingPerson.wage);
            }
        } else {
            setWage(0);
        }
    }, [editMode, hiredPeople, person]);

    function handleSubmit(event) {
        event.preventDefault();

        if (editMode) {
            const updatedList = hiredPeople.map((p) =>
                p.login.uuid === person.login.uuid ? { ...p, wage: wage } : p
            );
            setHiredPeople(updatedList);
        } else {
            setHiredPeople([
                ...hiredPeople,
                { ...person, isHired: true, wage },
            ]);
            const updatedPeople = people.map((p) =>
                p.login.uuid === person.login.uuid ? { ...p, isHired: true } : p
            );
            setPeople(updatedPeople);
        }
        navigate("/");
    }

    return (
        <form onSubmit={handleSubmit}>
            <label htmlFor="wage">Wage Offer</label>

            <input
                type="text"
                id="wage"
                name="wage"
                onChange={(e) => setWage(e.target.value)}
                value={wage}
            />
            <button type="submit">{editMode ? "Save Changes" : "Hire"}</button>
        </form>
    );
}

export default HireForm;
