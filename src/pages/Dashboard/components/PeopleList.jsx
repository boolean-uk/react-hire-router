import { useState } from "react";
import PeopleListItem from "./PeopleListItem";

export default function PeopleList({ people, setPeople, editable }) {
  const [editing, setEditing] = useState(false);

  return (
    <>
      {editable && (
        <button onClick={() => setEditing((prevEditing) => !prevEditing)}>
          {editing ? "Done" : "Edit"}
        </button>
      )}
      <ul>
        {people.map((person) => (
          <PeopleListItem
            key={person.login.uuid}
            person={person}
            people={people}
            setPeople={setPeople}
            editable={editable && editing}
          />
        ))}
      </ul>
    </>
  );
}
