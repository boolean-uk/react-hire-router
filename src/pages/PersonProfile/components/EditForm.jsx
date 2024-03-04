import { useState } from "react";
import { useNavigate} from "react-router-dom";

function EditForm(props) {
  const [wage, setWage] = useState(1);

  const { person, hiredPeople, setHiredPeople } = props;

  const goToDashboard = useNavigate();

  function handleSubmit(event) {
    event.preventDefault();
  }

  const handleEdit = () => {
    if (!hiredPeople.includes(person)) {
      setHiredPeople([...hiredPeople, person]);
    }
    person.wage = wage;
    goToDashboard("/dashboard");
  };

  const changeFirstName = (e) => {
    person.name.first = e.target.value
  }

  const changeLastName = (e) => {
    person.name.last = e.target.value;
  };

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="wage">Change Wage</label>
      <p></p>
      <input
        type="text"
        id="wage"
        name="wage"
        onChange={(e) => setWage(e.target.value)}
        value={wage}
      />
      <p></p>
      <label htmlFor="first_name">Change First Name</label>
      <p></p>
      <input
        type="text"
        id="first_name"
        name="first_name"
        onChange={(e) => changeFirstName(e)}
      />
      <p></p>
      <label htmlFor="last_name">Change Last Name</label>
      <p></p>
      <input
        type="text"
        id="last_name"
        name="last_name"
        onChange={(e) => changeLastName(e)}
      />
      <p></p>
      <button type="submit" onClick={handleEdit}>
        Submit Changes
      </button>
    </form>
  );
}

export default EditForm;
