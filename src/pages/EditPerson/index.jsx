import { useParams, useNavigate } from "react-router-dom"
import { useState } from "react";

function EditPerson({hiredPeople, updateHiredList}){
    const navigate = useNavigate();
    const {uuid} = useParams();
    const [person, setPerson] = useState(hiredPeople.find(p => p.login.uuid === uuid))


    const handleSubmit = (e) => {
        e.preventDefault();
         // Update the person's details in the hiredPeople array
        const updatedPeople = hiredPeople.map(p => (p.login.uuid === uuid ? person : p));
        // Update the state with the updated array
        updateHiredList(updatedPeople);
        // Navigate back to the dashboard
        navigate('/');
    };


    const handleInputChange = (e) => {
        const { name, value } = e.target;
        // Update the corresponding property of the person being edited
        setPerson({ ...person, [name]: value });
      };


    return (
        <div>
        <img src={person.picture.medium} />
        <form onSubmit={handleSubmit}>
          <label>Wage:</label>
          <input
            type="text"
            id="wage"
            name="wage"
            value={person.wage}
            onChange={handleInputChange}
            />
           <label htmlFor="email">Email</label>
            <input
                type="email"
                id="email"
                name="email"
                value={person.email}
                onChange={handleInputChange}
            />
          <button type="submit">Save</button>
        </form>
      </div>
    )  


}

export default EditPerson