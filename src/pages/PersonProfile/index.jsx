import { useEffect } from "react";
import HireForm from "./components/HireForm";
import { useParams } from "react-router-dom";

function PersonProfile(props) {
  const { id } = useParams();
  const { people, setHiredPeople, hiredPeople, setPeople, person, setPerson } =
    props;

  useEffect(() => {
    if ((people, id)) {
      const matchingPerson = people.find((p) => p.id.name === id);
      setPerson(matchingPerson);
    }
  }, [people, id]);

  if (!person) return <p>Loading...</p>;

  return (
    <article>
      <h2>
        {person.name.first} {person.name.last}
      </h2>

      <HireForm
        person={person}
        people={people}
        setPeople={setPeople}
        setHiredPeople={setHiredPeople}
        hiredPeople={hiredPeople}
        setPerson={setPerson}
      />
    </article>
  );
}

export default PersonProfile;
