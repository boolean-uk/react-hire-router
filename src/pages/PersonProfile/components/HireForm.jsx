import { useState } from "react";
import { useNavigate } from "react-router-dom";

function HireForm({ addHiredPeople, person }) {
    const [wage, setWage] = useState(person.wage || 0);

    const navigate = useNavigate();

    function handleSubmit(event) {
        event.preventDefault();

        addHiredPeople({ ...person, wage });
        navigate("/");
    }

    return (
        <form onSubmit={handleSubmit}>
            <label htmlFor="wage">Wage Offer</label>
            <input
                type="number"
                id="wage"
                name="wage"
                onChange={(e) => setWage(e.target.value)}
                value={wage}
            />
            <button type="submit">Hire</button>
        </form>
    );
}

export default HireForm;
