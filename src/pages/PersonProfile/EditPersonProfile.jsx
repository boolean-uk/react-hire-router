/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { useState, useEffect } from "react";
import { useLocation, useNavigate, useParams } from "react-router-dom";

function EditPersonProfile(props) {
  const { updateHiredPerson } = props;
  const [updatedPerson, setUpdatedPerson] = useState(null);

  let { id } = useParams();
  let location = useLocation();
  let navigate = useNavigate();

  useEffect(() => {
    let person = location.state != null ? location.state.person : null;
    setUpdatedPerson(person);
  }, [location]);

  function handleSubmit(event) {
    event.preventDefault();
    updateHiredPerson(updatedPerson);
    navigate("/");
  }

  function handleTextChange(event) {
    event.preventDefault();
    let name = event.target.name;
    let value = event.target.value;

    switch (name) {
      case "title":
        updatedPerson.name.title = value;
        break;
      case "first":
        updatedPerson.name.first = value;
        break;
      case "last":
        updatedPerson.name.last = value;
        break;
      case "email":
        updatedPerson.email = value;
        break;
      case "phone":
        updatedPerson.phone = value;
        break;
    }
    setUpdatedPerson({ ...updatedPerson });
  }

  if (updatedPerson == null) return <p>Select a hired person</p>;

  return (
    <article>
      <h2>Edit Hired Person</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>
            Title
            <select
              name="title"
              value={updatedPerson.name.title}
              onChange={handleTextChange}
            >
              <option value="Mr">Mr</option>
              <option value="Ms">Ms</option>
              <option value="Mrs">Mrs</option>
            </select>
          </label>
          <br />
          <br />
          <label>
            First Name
            <input
              type="text"
              name="first"
              value={updatedPerson.name.first}
              onChange={handleTextChange}
            />
          </label>
          <br />
          <br />
          <label>
            Last Name
            <input
              type="text"
              name="last"
              value={updatedPerson.name.last}
              onChange={handleTextChange}
            />
          </label>
          <br />
          <br />
        </div>

        <div>
          <label>
            Email
            <input
              type="email"
              name="email"
              value={updatedPerson.email}
              onChange={handleTextChange}
            />
          </label>
          <br />
          <br />
          <label>
            Phone
            <input
              type="phone"
              name="phone"
              value={updatedPerson.phone}
              onChange={handleTextChange}
            />
          </label>
          <br />
          <br />
        </div>

        <div>
          <button type="submit">SAVE</button>
        </div>
      </form>
    </article>
  );
}

export default EditPersonProfile;
