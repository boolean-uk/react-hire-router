import { useNavigate } from "react-router-dom";
import { useState } from "react";
import PropTypes from "prop-types";
export default function EditProfileForm(props) {
  const navigate = useNavigate();
  const { person } = props;
  const [wage, setWage] = useState(person.wage || 0);
  const [firstName, setFirstName] = useState(person.name.first);
  const [lastName, setLastName] = useState(person.name.last);

  const handleSubmit = (event) => {
    event.preventDefault();

    const updatedPerson = {
      ...props.person,
      wage: wage,
      name: {
        ...props.person.name,
        first: firstName,
        last: lastName,
      },
    };

    const updatedHiredPeople = props.hiredPeople.map((p) =>
      p.id === props.id ? updatedPerson : p
    );

    props.setHiredPeople(updatedHiredPeople);

    navigate("/");
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label htmlFor="firstName">First Name</label>
        <input
          type="text"
          id="firstName"
          name="firstName"
          onChange={(e) => setFirstName(e.target.value)}
          value={firstName}
        />
        <label htmlFor="lastName">Last Name</label>
        <input
          type="text"
          id="lastName"
          name="lastName"
          onChange={(e) => setLastName(e.target.value)}
          value={lastName}
        />
        <label htmlFor="wage">Wage Offer</label>
        <input
          type="text"
          id="wage"
          name="wage"
          onChange={(e) => setWage(e.target.value)}
          value={wage}
        />

        <button type="submit">Update</button>
      </form>
    </div>
  );
}

EditProfileForm.propTypes = {
  setHiredPeople: PropTypes.func.isRequired,
  hiredPeople: PropTypes.array.isRequired,
  person: PropTypes.object.isRequired,
  id: PropTypes.string.isRequired,
};
