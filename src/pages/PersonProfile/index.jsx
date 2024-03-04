import React, { useEffect, useState } from "react";
import HireForm from "./components/HireForm";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";

function PersonProfile({ people, hiredPeople, setHiredPeople }) {
  const [person, setPerson] = useState(null);
  const [isHired, setIsHired] = useState(false);
  const [editable, setEditable] = useState(false);
  const [wage, setWage] = useState(0);
  const { index } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    if (people && index) {
      const selectedPerson = people[index];
      setPerson(selectedPerson);
      const hiredPerson = hiredPeople.find((p) => p.id === selectedPerson.id);
      setIsHired(!!hiredPerson);
      setWage(hiredPerson ? hiredPerson.wage : 0);
    }
  }, [index, people, hiredPeople]);

  const handleEditClick = () => {
    setEditable(true);
  };

  const handleSave = () => {
    const updatedHiredPeople = [...hiredPeople];
    const hiredPersonIndex = updatedHiredPeople.findIndex(
      (p) => p.id === person.id
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
