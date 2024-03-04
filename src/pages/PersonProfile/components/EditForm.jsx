/* eslint-disable react/prop-types */

import { useState } from "react";
import { useNavigate } from "react-router-dom";

function EditForm(props) {
  const [person, setPerson] = useState(props.person);
  const navigate = useNavigate();

  function handleSubmit(event) {
    event.preventDefault();
    props.onEdit(person,props.id);
    navigate("/");
  }

  function onChange(event) {
    if (event.target.name === "wage") {
      setPerson({ ...person, wage: event.target.value });
    }
  }

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="wage">Wage Offer</label>
      <input
        type="text"
        id="wage"
        name="wage"
        onChange={onChange}
        value={person.wage}
      />
      <button type="submit">Save</button>
    </form>
  );
}

export default EditForm;
