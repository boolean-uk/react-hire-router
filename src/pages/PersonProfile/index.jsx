import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import HireForm from "./components/HireForm";
import EditForm from "./components/EditForm";

function PersonProfile(props) {
  const [person, setPerson] = useState(null);

  const { people, hiredPeople, setHiredPeople, isEditLink } = props;

  const { id } = useParams();

  useEffect(() => {
    setPerson(
      people.find(
        (person) => Number(parseInt(person.id.value)) === Number(id)
      )
    );
    
  }, [people, id]);

  console.log("In person profile: ", person, " and it is ", isEditLink)

  if (!person) return <p>Loading...</p>;

  return (
    <article>
      <h2>
        {person.name.first} {person.name.last}
      </h2>
      {!isEditLink && (
        <HireForm
          person={person}
          hiredPeople={hiredPeople}
          setHiredPeople={setHiredPeople}
        />
      )}
      {isEditLink && (
        <EditForm
          person={person}
          hiredPeople={hiredPeople}
          setHiredPeople={setHiredPeople}
        />
      )}
    </article>
  );
}

export default PersonProfile;
