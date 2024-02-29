import { useEffect, useState } from "react";
import HireForm from "./components/HireForm";
import { useParams } from "react-router-dom";
import PropTypes from "prop-types";

function PersonProfile({ personData }) {
  const [person, setPerson] = useState(null);
  const { people, addToHired } = personData;
  const { id } = useParams();

  PersonProfile.propTypes = {
    personData: PropTypes.shape({
      people: PropTypes.array.isRequired,
      addToHired: PropTypes.func.isRequired,
    }).isRequired,
  };

  useEffect(() => {
    const search = people.find((person) => person.id.value === id);
    if (search) {
      setPerson(search);
    } else {
      console.log("Person not found");
    }
  }, [id, people]);

  if (!person) return <p>Loading...</p>;

  return (
    <article>
      <h2>
        {person.name.first} {person.name.last}
      </h2>
      <HireForm person={person} />
      <HireForm person={person} addToHired={addToHired} />
    </article>
  );
}

export default PersonProfile;
