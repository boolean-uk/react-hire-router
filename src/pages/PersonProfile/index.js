import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import HireForm from "./components/HireForm";

function PersonProfile(props) {
  const [person, setPerson] = useState(null);
  const { hiredPeople, setHiredPeople } = props;
  const location = useLocation();

  useEffect(() => {
    if (location.state) {
      const { person } = location.state;
      setPerson(person);
    }
  }, [location]);

  if (!person) return <p>Loading...</p>;

  return (
    <div>
      <h2>
        {person.name.first} {person.name.last}
      </h2>
      <HireForm person={person} hiredPeople={hiredPeople} setHiredPeople={setHiredPeople} />
    </div>
  );
}

export default PersonProfile;

