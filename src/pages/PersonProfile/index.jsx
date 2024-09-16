/* eslint-disable react/prop-types */
import { useState, useEffect } from "react";
import HireForm from "./components/HireForm";

function PersonProfile(props) {
  const [person, setPerson] = useState(null);
  useEffect(() => {
    setPerson(props.person);
  }, [props.person]);
  function onHire(wage) {
    const newPerson={ ...person, wage: wage }
    setPerson(newPerson);
    props.onHire(newPerson);
  }
  
  if (!person) return <p>Loading...</p>;

  return (
    <article>
      <h2>
        {person.name.first} {person.name.last}
      </h2>
      <HireForm person={person} onHire={onHire} />
    </article>
  );
}

export default PersonProfile;
