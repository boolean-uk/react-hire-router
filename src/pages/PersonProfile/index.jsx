import React, { useEffect, useState } from "react";
import HireForm from "./components/HireForm";
import { useParams, useNavigate } from "react-router-dom";

function PersonProfile({ people, hiredPeople, setHiredPeople }) {
  const [person, setPerson] = useState(null);
  const [isHired, setIsHired] = useState(false);
  const [editable, setEditable] = useState(false);
  const [wage, setWage] = useState(0);
  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    const selectedPerson = people.find((person) => person.login.uuid === id);
    setPerson(selectedPerson);
    const hiredPerson = hiredPeople.find((p) => p.login.uuid === id);
    setIsHired(!!hiredPerson);
    setWage(hiredPerson ? hiredPerson.wage : 0);
  }, [id, people, hiredPeople]);

  const handleEditClick = () => {
    setEditable(true);
  };

  const handleSave = () => {
    const updatedHiredPeople = [...hiredPeople];
    const hiredPersonIndex = updatedHiredPeople.findIndex(
      (p) => p.login.uuid === person.login.uuid
    );
    if (hiredPersonIndex !== -1) {
      updatedHiredPeople[hiredPersonIndex].wage = wage;
      setHiredPeople(updatedHiredPeople);
    }
    setEditable(false);
    navigate("/Dashboard");
  };

  if (!person) {
    return <p>Loading...</p>;
  }

  return (
    <article>
      <h2>
        {person.name.first} {person.name.last}
      </h2>
      {isHired && (
        <>
          <p>
            Wage:{" "}
            {editable ? (
              <input
                type="text"
                value={wage}
                onChange={(e) => setWage(e.target.value)}
              />
            ) : (
              <>
                £{wage} <button onClick={handleEditClick}>Edit</button>
              </>
            )}
          </p>
          {editable && <button onClick={handleSave}>Save</button>}
        </>
      )}
      {!isHired && (
        <HireForm
          person={person}
          setHiredPeople={setHiredPeople}
          hiredPeople={hiredPeople}
          setIsHired={setIsHired}
        />
      )}
    </article>
  );
}

export default PersonProfile;
