import { useEffect } from "react";
import HireForm from "./components/HireForm";
import { useLocation } from "react-router-dom";

function PersonProfile() {
  const location = useLocation();
  const { person } = location.state;

  if (!person) return <p>Loading...</p>;

  return (
    <article>
      <h2>
        {person.name.first} {person.name.last}
      </h2>
      {/* Skjalg Eide Hodneland showed me this simple way of querying google maps to display a map */}
      <iframe
        style={{ width: "600px", height: "400px" }}
        src={`https://maps.google.com/maps?q=${person.location.coordinates.latitude},${person.location.coordinates.longitude}&output=embed`}
      />
      <HireForm person={person} />
    </article>
  );
}

export default PersonProfile;
