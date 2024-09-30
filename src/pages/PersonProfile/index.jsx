import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import HireForm from "./components/HireForm";

export default function PersonProfile({ people, hiredPeople, setHiredPeople }) {
  const [person, setPerson] = useState(null);
  const { personUuid } = useParams();

  useEffect(
    () =>
      people.forEach((p) => {
        if (p.login.uuid === personUuid) {
          setPerson(p);
        }
      }),
    [],
  );

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
