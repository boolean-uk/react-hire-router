import { useParams, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import EditForm from "./EditForm.jsx";
function EditPerson(props) {
  const [editPerson, setEditPerson] = useState(null);
  const { people, setHiredPeople, hiredPeople, setPeople } = props;
  const { id } = useParams();
  const navigate = useNavigate();
  console.log(id);
  console.log(hiredPeople);

  useEffect(() => {
    if (hiredPeople && id) {
      //Find update the person based on id
      const match = hiredPeople.find((item) => item.id.name === id);
      setEditPerson(match);
    }
  }, [hiredPeople, id]);

  return (
    <div>
      {editPerson ? (
        <h2>
          {editPerson.name.first} {editPerson.name.last}
        </h2>
      ) : (
        <p>Loading profile...</p>
      )}

      <EditForm
        editPerson={editPerson}
        setEditPerson={setEditPerson}
        setHiredPeople={setHiredPeople}
        hiredPeople={hiredPeople}
      />
      <button onClick={() => navigate("/dashboard")}>Back to dashboard</button>
    </div>
  );
}
export default EditPerson;
