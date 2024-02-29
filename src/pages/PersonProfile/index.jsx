/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";
import HireForm from "./components/HireForm";
import { useParams } from "react-router-dom";

function PersonProfile({ setHiredPeople, hiredPeople, people }) {
  const { id } = useParams();
  //console.log(id);
  const person = people.find((p) => p.login.uuid === id);

  if (!people) return <p>Loading...</p>;

  return (
    <article>
      <h2>
        {person.name.first} {person.name.last}
      </h2>
      <p>
        {person.location.country}: {person.location.city} <br />
        {person.email}
      </p>
      <HireForm
        person={person}
        setHiredPeople={setHiredPeople}
        hiredPeople={hiredPeople}
      />
    </article>
  );
}

export default PersonProfile;
