import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import PropTypes from "prop-types";

import HireForm from "./components/HireForm";

function PersonProfile({ people, hiredPeople, setHiredPeople }) {
  const [person, setPerson] = useState(null);

  const params = useParams();

  useEffect(() => {
    const foundPerson = people.find(
      (entry) => entry.id.id === Number(params.id),
    );
    setPerson(foundPerson);
  }, [params, people]);
  console.log('person', person)
  if (!person) return <p>Loading.......</p>;

  return (
    <article className="px-4">
      <div className="flex w-min flex-col rounded-lg bg-teal-200">
        <div className="flex place-items-center">
          <h2 className="w-max rounded-br-lg bg-white p-2 text-2xl text-teal-500">
            {person.name.first} {person.name.last}
          </h2>
          <div className="grow p-2 text-center text-2xl text-white">
            {person.id.name}
          </div>
        </div>
        <HireForm
          params={params}
          person={person}
          hiredPeople={hiredPeople}
          setHiredPeople={setHiredPeople}
        />
      </div>
    </article>
  );
}

PersonProfile.propTypes = {
  people: PropTypes.array,
  hiredPeople: PropTypes.array,
  setHiredPeople: PropTypes.func,
};

export default PersonProfile;
