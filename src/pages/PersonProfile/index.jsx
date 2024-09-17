import { useState, useEffect } from "react";
import HireForm from "./components/HireForm";
import { useLocation } from "react-router-dom";

function PersonProfile({ hiredPeople, setHiredPeople }) {
  const [person, setPerson] = useState(null); // Define state for the person

  // Use useLocation to access the person's data from the state
  //attached using Link in the PeopleListItem component
  const theLocation = useLocation();

  useEffect(() => {
    if (theLocation.state) {
      const { person } = theLocation.state;
      setPerson(person); // Update the person state with the extracted person data
    }
  }, [theLocation]);

  if (!person) return <p>Loading...</p>;

  return (
    <article>
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

export default PersonProfile;
