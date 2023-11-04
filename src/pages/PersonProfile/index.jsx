import { useEffect, useState } from "react";
import HireForm from "./components/HireForm";
import { useLocation } from "react-router-dom";

function PersonProfile({ addHiredPeople }) {
    const [person, setPerson] = useState(null);

    const location = useLocation();

    useEffect(() => setPerson(location.state), []);

    if (!person) return <p>Loading...</p>;

    return (
        <article>
            <h2>
                {person.name.first} {person.name.last}
            </h2>
            <HireForm person={person} addHiredPeople={addHiredPeople} />
        </article>
    );
}

export default PersonProfile;
