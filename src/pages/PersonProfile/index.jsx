/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";
import HireForm from "./components/HireForm";
import {  useParams } from "react-router-dom";

function PersonProfile(props) {
  const [person, setPerson] = useState(null);
  const { id } = useParams();
  const { people, hiredPeople, setHiredPeople } = props;

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
      {!hiredPeople.some((p) => p.id.value === person.id.value) &&       
      (<HireForm person={person} hiredPeople={hiredPeople} setHiredPeople={setHiredPeople} />)}
    </article>
  );
}

export default PersonProfile;
