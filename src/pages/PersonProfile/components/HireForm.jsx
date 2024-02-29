/* eslint-disable react/prop-types */
import { useState } from "react";
import { useNavigate } from "react-router-dom";

function HireForm({ person, hiredPeople, setHiredPeople }) {
    const isHired = hiredPeople.filter((p) => p.id === person.id).length === 1;
    const [wage, setWage] = useState(
        isHired ? hiredPeople.filter((p) => p.id === person.id)[0].wage : 0
    );
    const nav = useNavigate();

    function handleSubmit(event) {
        event.preventDefault();
        if (isHired) {
            const index = hiredPeople.findIndex((p) => p.id === person.id);
            const editedHire = { ...person, wage: wage };
            const newHiredPeople = [...hiredPeople];
            newHiredPeople[index] = editedHire;
            setHiredPeople([...newHiredPeople]);
        } else {
            const newHire = { ...person, wage: wage };
            setHiredPeople([...hiredPeople, newHire]);
        }
        nav("/");
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
            {isHired ? (
                <button type="submit">Edit</button>
            ) : (
                <button type="submit">Hire</button>
            )}
        </form>
    );
}

export default HireForm;
