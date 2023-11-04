import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

import HireForm from "./components/HireForm";

function PersonProfile({ people, setPeople, hiredPeople, setHiredPeople }) {
  const [person, setPerson] = useState(null);

  const params = useParams();

  useEffect(() => {
    const foundPerson = people.find(
      (entry) => entry.id.id === Number(params.id),
    );
    setPerson(foundPerson);
  }, [params]);

  if (!person) return <p>Loading.......</p>;

  return (
    <article>
      <h2>
        {person.name.first} {person.name.last}
      </h2>
      <HireForm
        params={params}
        person={person}
        hiredPeople={hiredPeople}
        setHiredPeople={setHiredPeople}
      />
    </article>
  );
}

export default PersonProfile;
