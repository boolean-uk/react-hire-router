import { useParams, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import HireForm from "./HireForm.jsx";
function Profile(props) {
  const [profilePerson, setProfilePerson] = useState(null);
  const { people, setHiredPeople, hiredPeople, setPeople } = props;
  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    if (people && id) {
        //Find update the person based on id
      setProfilePerson(people.find((item) => item.id.name === id));
    }
  }, [people, id]);

  return (
    <div>
      {profilePerson ? (
        <h2>
          {profilePerson.name.first} {profilePerson.name.last}
        </h2>
      ) : (
        <p>Loading profile...</p>
      )}

      <HireForm
        profilePerson={profilePerson}
        people={people}
        setPeople={setPeople}
        setProfilePerson={setProfilePerson}
        setHiredPeople={setHiredPeople}
        hiredPeople={hiredPeople}
      />
      <button onClick={() => navigate("/dashboard")}>Back to dashboard</button>
    </div>
  );
}
export default Profile;
