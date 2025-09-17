import {useNavigate} from "react-router-dom";
import {useState} from "react";

function EditForm(props) {
    const navigate = useNavigate();
    const {onUpdate} = props;
    
    const [person, setPerson] = useState(props.person);

    function handleSubmit(event) {
        event.preventDefault();
        navigate("/");
        onUpdate(person);
    }

    return (
        <form onSubmit={handleSubmit}>
            <label htmlFor="FirstName">First Name</label>
            <input
                type="text"
                id="firstName"
                name="firstName"
                onChange={e => {
                    setPerson(prev => ({
                        ...prev,
                        name: {
                            first: e.target.value,
                        },
                    }));
                }}
                value={person.name.first}
            />
            <label htmlFor="LastName">Last Name</label>
            <input
                type="text"
                id="lastName"
                name="lastName"
                onChange={e => {
                    setPerson(prev => ({
                        ...prev,
                        name: {
                            last: e.target.value,
                        },
                    }));
                }}
                value={person.name.last}
            />
            <button type="submit">Update</button>
        </form>
    )
}

export default EditForm
