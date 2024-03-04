/* eslint-disable react/prop-types */

import { useState } from "react";
import { useNavigate } from "react-router-dom";

function EditForm(props) {
  const [person, setPerson] = useState(props.person);
  const navigate = useNavigate();

  function handleSubmit(event) {
    event.preventDefault();
    props.onEdit(person, props.id);
    navigate("/");
  }

  function onChange(event) {
    if (event.target.name === "wage") {
      setPerson({ ...person, wage: event.target.value });
    }
    if (event.target.name === "lastName") {
      setPerson({
        ...person,
        name: { ...person.name, last: event.target.value },
      });
    }
    if (event.target.name === "firstName") {
      setPerson({
        ...person,
        name: { ...person.name, first: event.target.value },
      });
    }
  }
  return (
    <form onSubmit={handleSubmit}>
      <p>
        <label htmlFor="firstName">FirstName</label>
        <input
          type="text"
          id="firstName"
          name="firstName"
          onChange={onChange}
          value={person.name.first}
        />
      </p>
      <p>
        <label htmlFor="lastName">Last Name</label>
        <input
          type="text"
          id="lastName"
          name="lastName"
          onChange={onChange}
          value={person.name.last}
        />
      </p>
      <p>
        <label htmlFor="wage">Wage Offer</label>
        <input
          type="text"
          id="wage"
          name="wage"
          onChange={onChange}
          value={person.wage}
        />
      </p>
      <p>
        <button type="submit">Save</button>
      </p>
    </form>
  );
}

export default EditForm;
