import { useEffect, useState } from 'react';
import {useParams } from "react-router-dom";
import PropTypes from "prop-types";

function EditHiredPersonProfile({hiredPeople}) {
    
  const [title, setTitle] = useState(0);
  const [wage, setWage] = useState(0);
  const [personToUpdate, setPersonToUpdate] = useState(null);
  const { id } = useParams();

useEffect(() => {
    if(hiredPeople && id){
        const matchingPerson = hiredPeople.find((person) => {
         return Number(person.id) === Number(id)
    })
        setPersonToUpdate(matchingPerson)
    }
    
}, [hiredPeople, id])

  function handleSubmit(event) {
    event.preventDefault();

    personToUpdate.name.title = title;
    personToUpdate.wage = wage;
  }

  if (!personToUpdate) return <div>Loading...</div>;

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="title">Person title</label>
      <input
        type="text"
        id="title"
        name="title"
        onChange={e => setTitle(e.target.value)}
        value={title}
      />
      <label htmlFor="wage">Wage Offer</label>
      <input
        type="text"
        id="wage"
        name="wage"
        onChange={e => setWage(e.target.value)}
        value={wage}
      />
      <button type="submit">Confirm edits</button>
    </form>
  );
}

export default EditHiredPersonProfile;

EditHiredPersonProfile.propTypes = {
  setHiredPeople: PropTypes.func,
  id: PropTypes.number
}