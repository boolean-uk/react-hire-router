import { useEffect, useState } from "react";
import HireForm from "./components/HireForm";
import { useParams } from "react-router-dom";

function PersonProfile({ people, hiredPeople, setHiredPeople }) {
  const [person, setPerson] = useState(null);
  const { id } = useParams();
  useEffect(() => {
    if (people && id) {
      setPerson(people.find((x) => x.id.value === id));
    }
  }, [people, id]);
  if (!person) return <p>Loading/No valid ID...</p>;
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
