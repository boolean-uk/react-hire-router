import { useState, useEffect } from "react";
import HireForm from "./components/HireForm";
import { useParams } from "react-router-dom";
import EditForm from "./components/EditForm";

function PersonProfile(props) {
  const [person, setPerson] = useState(null);

  const { id } = useParams();
  const { people, setHiredPeople, hiredPeople, view } = props;

  useEffect(() => {
    if (people && id) {
      setPerson(people[id]);
    }
  }, [people, id]);
  if (!person) return <p>Loading...</p>;

  return (
    <article>
      <h2>
        {person.name.first} {person.name.last}
      </h2>
      {view && (
        <HireForm
          person={person}
          setHiredPeople={setHiredPeople}
          hiredPeople={hiredPeople}
          setPerson={setPerson}
        />
      )}
      {!view && (
        <EditForm
          person={person}
          setHiredPeople={setHiredPeople}
          hiredPeople={hiredPeople}
          setPerson={setPerson}
        />
      )}
    </article>
  );
}

export default PersonProfile;
