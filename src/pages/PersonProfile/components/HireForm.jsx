/* eslint-disable react/prop-types */
import { useState } from "react"
import { useNavigate } from "react-router-dom"

export default function HireForm(props) {
  const { handleUpdate, person } = props;
  const [wage, setWage] = useState(person.wage || '')
  const [editMode, setEditMode] = useState(false);
  const [editedPerson, setEditedPerson] = useState({ ...person });
  
  const navigate = useNavigate()

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setEditedPerson({ ...editedPerson, [name]: value });
  }

  const handleWageChange = (e) => {
    const { value } = e.target;
    if (/^\d+$/.test(value) || value === '') {
      setWage(value);
    }
  }
  const handleSubmit = (e) => {
    e.preventDefault()
    const salariedPerson = { ...person, wage }
    handleUpdate(person.login.uuid, salariedPerson)
    navigate(-1)
  }

  return (
    
    <form onSubmit={handleSubmit}>
    <h2>
      Name: {editedPerson.name.first} {editedPerson.name.last}
      <button type="button" onClick={() => setEditMode(!editMode)}>
        {editMode ? "Cancel" : "Edit"}
      </button>
      <br />
    </h2>
    <div>
      <img src={editedPerson.picture.large} alt="Large" />
    </div>
    <p>
      <strong>Age:</strong>{" "}
      {editMode ? (
        <input
          type="number"
          name="age"
          value={editedPerson.dob.age}
          onChange={handleInputChange}
        />
      ) : (
        editedPerson.dob.age
      )}
    </p>
    <p>
      <strong>Dob:</strong>{" "}
      {editMode ? (
        <input
          type="date"
          name="dob"
          value={editedPerson.dob.date.substring(0, 10)}
          onChange={handleInputChange}
        />
      ) : (
        editedPerson.dob.date.substring(0, 10)
      )}
    </p>
    <p>
      <strong>Email:</strong>{" "}
      {editMode ? (
        <input
          type="email"
          name="email"
          value={editedPerson.email}
          onChange={handleInputChange}
        />
      ) : (
        editedPerson.email
      )}
    </p>
    <p>
      <strong>Phone:</strong>{" "}
      {editMode ? (
        <input
          type="tel"
          name="phone"
          value={editedPerson.phone}
          onChange={handleInputChange}
        />
      ) : (
        editedPerson.phone
      )}
    </p>
    <p>
      <strong>Location:</strong>{" "}
      {editMode ? (
        <input
          type="text"
          name="location"
          value={`${editedPerson.location.city}, ${editedPerson.location.state}, ${editedPerson.location.country}`}
          onChange={handleInputChange}
        />
      ) : (
        `${editedPerson.location.city}, ${editedPerson.location.state}, ${editedPerson.location.country}`
      )}
    </p>
    <label htmlFor="wage">Wage Offer</label>
    <input
      type="text"
      id="wage"
      name="wage"
      onChange={handleWageChange}
      value={wage}
      disabled={!editMode} 
    />
    <button type="submit">Hire</button>
  </form>
  )
}