import { useState, useEffect } from "react";
import HireForm from "./components/HireForm";
import { useParams } from "react-router-dom";
import PropTypes from "prop-types";

function PersonProfile(props) {
  const [person, setPerson] = useState(null);
  const { id } = useParams();
  const { people, hiredPeople, setHiredPeople } = props;

  useEffect(() => {
    if (people && id) {
      setPerson(people.find((person) => person.id.value === id));
    }
  }, [people, id]);

  if (!person) return <p>No profile with this ID.</p>;

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
      <HireForm
        person={person}
        hiredPeople={hiredPeople}
        setHiredPeople={setHiredPeople}
      />
    </article>
  );
}

PersonProfile.propTypes = {
  people: PropTypes.array,
  hiredPeople: PropTypes.array,
  setHiredPeople: PropTypes.func,
};

export default PersonProfile;
