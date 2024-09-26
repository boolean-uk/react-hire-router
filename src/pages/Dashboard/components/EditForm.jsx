import { useState } from "react";
function EditForm(props) {
  const [wage, setWage] = useState(0);
  const [first, setFirst] = useState("");
  const [last, setLast] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    //Update the fields
    props.editPerson.wage = wage;
    props.editPerson.name.first = first;
    props.editPerson.name.last = last;
  };

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="wage">Edit wage</label>
      <input
        type="text"
        id="wage"
        name="wage"
        onChange={(e) => setWage(e.target.value)}
        value={wage}
      />
      <br></br>
      <label htmlFor="name">Edit first name</label>
      <input
        type="text"
        id="first"
        name="first"
        value={first}
        onChange={(e) => setFirst(e.target.value)}
      />
      <br></br>
      <label htmlFor="last">Edit last name</label>
      <input
        type="text"
        id="last"
        name="last"
        value={last}
        onChange={(e) => setLast(e.target.value)}
      />

      <input type="submit" value="Submit changes" />
    </form>
  );
}
export default EditForm;
