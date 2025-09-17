import HireForm from './components/HireForm'
import {useParams} from "react-router-dom";
import EditForm from "./components/EditForm.jsx";

function PersonProfile(props) {
    const {people, canEdit, onUpdate} = props;
    const {id} = useParams();
    const person = people.find((person) => (person.name.first + "_" + person.name.last) === id);

    if (!person) return <p>Loading...</p>

    return (
        <article>
            {canEdit ?
                <EditForm onUpdate={onUpdate} person={person}></EditForm> :
                <>
                    <h2>
                        {person.name.first} {person.name.last}
                    </h2>
                    <HireForm onHire={() => props.onHire(person)}/>
                </>
            }
        </article>
    )
}

export default PersonProfile
