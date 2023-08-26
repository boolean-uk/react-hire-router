import React, { useState, useEffect } from "react";
import HireForm from "./components/HireForm";
import { useLocation } from "react-router-dom";
import { useParams } from "react-router-dom";

function PersonProfile({ setHiredPeople }) {
  const { id } = useParams();
  const location = useLocation();
  const [people, setPeople] = useState([]);
  const [person, setPerson] = useState(null);

  const paramNumber = +id

  useEffect(() => {
    async function fetchData() {
      const response = await fetch("https://randomuser.me/api/?page=3&results=50&seed=abc");
      const data = await response.json();
      setPeople(data.results);
    };
    fetchData();
  }, []);


  useEffect(() => {
    function findPerson() {
      if (location.state && location.state.person) {
        setPerson(location.state.person);
      } else {
        const parPerson = people.find((x, index) => index === paramNumber);
        if (parPerson) return setPerson(parPerson);
      }
    };

    findPerson();
  }, [people]);

  if (!person) return <p>Loading...</p>;

  return (
    <article>
      <h1>view</h1>
      <h2>
        {person.name.first} {person.name.last}
      </h2>
      <HireForm person={person} setHiredPeople={setHiredPeople} />
    </article>
  );
}

export default PersonProfile;