import { useEffect, useState } from "react";

import HireForm from "./components/HireForm";
import { useParams } from "react-router-dom";

export default function PersonProfile(props) {
  const [person, setPerson] = useState(null);
  const { people, setHiredPeople, hiredPeople } = props;

  const urlParams = useParams();

  const testSubject = people.find((p) => p.id.value === urlParams.id);

  useEffect(() => {
    setPerson(testSubject);
  }, []);

  if (!person) return <p>Loading...</p>;

  return (
    <article>
      <h2>
        {person.name.first} {person.name.last}
      </h2>
      <HireForm person={person} />
      <HireForm
        setHiredPeople={setHiredPeople}
        hiredPeople={hiredPeople}
        person={person}
      />
    </article>
  );
}
