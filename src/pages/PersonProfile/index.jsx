import { useState, useEffect } from "react";
import HireForm from "./components/HireForm";
import { Link, useParams } from "react-router-dom";
import PropTypes from "prop-types";

function PersonProfile(props) {
  const [person, setPerson] = useState(null);
  const { id } = useParams();
  const { people, setPeople, hiredPeople, setHiredPeople } = props;

  useEffect(() => {
    if (people && id) {
      setPerson(people.find((person) => person.id.value === id));
    }
  }, [people, id]);

  if (!person) return <p>No profile with this ID.</p>;
  const isHired = hiredPeople.some((p) => p.id.value === id);

  return (
    <article>
      {/*<nav>
        <button onClick={() => navigate("/")}>Go Home</button>
        <button onClick={() => navigate(-1)}>Go Back</button>
        <button onClick={() => navigate(1)}> Go Forward</button>
        </nav>*/}
      <h2>
        {person.name.first} {person.name.last}
      </h2>
      <img src={person.picture.large} />
      <h4>About</h4>
      <p>Gender: {person.gender}</p>
      <p>Age: {person.dob.age}</p>

      <h4>Contact</h4>
      <p>Email: {person.email}</p>
      <p>Phone: {person.phone}</p>
      <p>Address: {person.location.street.name} {person.location.street.number}</p>

      <h4>Location</h4>
      <p>Country: {person.location.country}</p>
      <p>City: {person.location.city}</p>
      <br/>
      
      { !isHired && 
        <HireForm
          person={person}
          people={people}
          setPeople={setPeople}
          hiredPeople={hiredPeople}
          setHiredPeople={setHiredPeople}
        />
      }

      { isHired &&
        <Link className="link-button" to={`/view/${person.id.value}/edit`}>Edit</Link>
      }
      
    </article>
  );
}

PersonProfile.propTypes = {
  people: PropTypes.array,
  hiredPeople: PropTypes.array,
  setHiredPeople: PropTypes.func,
  setPeople: PropTypes.array,
};

export default PersonProfile;
