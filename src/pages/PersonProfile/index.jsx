/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";
import HireForm from "./components/HireForm";
import { useParams } from "react-router-dom";

function PersonProfile(props) {
  const { id } = useParams();
  console.log(id);
  const { people } = props;
  const person = people.find((p) => p.login.uuid === id);

  if (!people) return <p>Loading...</p>;

  return (
    <article>
      <h2>
        {person.name.first} {person.name.last}
      </h2>
      <HireForm person={person} />
    </article>
  );
}

export default PersonProfile;
