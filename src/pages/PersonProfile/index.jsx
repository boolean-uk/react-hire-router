import HireForm from './components/HireForm'
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";


function PersonProfile({data, hiredPeople, setHiredPeople}) {

  const { id } = useParams();
  const person = data.find((x) => x.login.uuid === id);
  const navigate = useNavigate();
  
  const handleHire = (person, wage) => {
    if (person && person.login.uuid) {
      if (!hiredPeople.some((hire) => hire.login.uuid === person.login.uuid)) {
        // legg til wage på personen
        setHiredPeople([...hiredPeople, { ...person, wage }]);
      }
      navigate("/"); // gå tilbake til dashboard
    }
  };
 
  
  if (!person) return <p>Loading...</p>

  return (
    <article>
      <h2>
        {person.name.first} {person.name.last}
      </h2>
      <p>
            Email: {person.email} <br />
            Phone: {person.phone} <br />
            Location: {person.location.city}, {person.location.country}
            
        </p>
        {person && person.picture.large ? (
        <img
          src={person.picture.large}
          alt={`${person.name.first} ${person.name.last}`}
          style={{ width: "200px" }}
        />
      ) : (
        "No patch"
      )}
      <HireForm person={person} handleHire={handleHire}/>
      
    </article>
  )
}

export default PersonProfile
