import { useEffect, useState } from "react";
import HireForm from "./components/HireForm";
import { useLocation } from "react-router-dom";

function PersonProfile(props) {
    const [person, setPerson] = useState(null);
    const location = useLocation();
    const { hiredPeople, setHiredPeople, editMode, people, setPeople } = props;
    useEffect(() => {
        if (location.state) {
            setPerson(location.state.person);
        }
    }, [location]);

    if (!person) return <p>Loading...</p>;

    return (
        <article>
            <h2>
                {person.name.first} {person.name.last}
            </h2>

            {/* ADD SOME MORE INFO HERE */}

            <HireForm
                person={person}
                hiredPeople={hiredPeople}
                setHiredPeople={setHiredPeople}
                editMode={editMode}
                people={people}
                setPeople={setPeople}
            />
        </article>
    );
}

export default PersonProfile;
