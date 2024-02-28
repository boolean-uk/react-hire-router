import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import HireForm from "./components/HireForm";
import PropTypes from "prop-types";

function PersonProfile({ people, setHiredPeople, hiredPeople, setPeople }) {
  const [person, setPerson] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    console.log("fetch person with id= ", id);
    const selectedPerson = people.find((p) => p.id === id);
    if (selectedPerson === undefined) {
      setPerson(hiredPeople.find((p) => p.id === id));
    } else {
      setPerson(selectedPerson);
    }
  }, [id, people, hiredPeople]);

  if (!person) return <p>Loading...</p>;
  return (
    <article>
      <h2>
        {person.name.first} {person.name.last}
      </h2>
      <HireForm
        person={person}
        setHiredPeople={setHiredPeople}
        hiredPeople={hiredPeople}
        people={people}
        setPeople={setPeople}
      />
    </article>
  );
}

export default PersonProfile;
PersonProfile.propTypes = {
  people: PropTypes.arrayOf(PropTypes.object),
  setHiredPeople: PropTypes.func,
};
