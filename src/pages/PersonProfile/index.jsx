import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import HireForm from "./components/HireForm";

function PersonProfile({ people, setHiredPeople }) {
  const { id } = useParams();
  const [person, setPerson] = useState(null);

  useEffect(() => {
    const selectedPerson = people.find((p) => p.id === id);
    setPerson(selectedPerson);
  }, [id, people]);

  if (!person) return <p>Loading...</p>;

  return (
    <article>
      <h2>
        {person.name.first} {person.name.last}
      </h2>
      <HireForm person={person} setHiredPeople={setHiredPeople} />
    </article>
  );
}

export default PersonProfile;
