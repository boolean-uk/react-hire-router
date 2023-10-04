import { useState, useEffect } from "react";
import { useLocation, useParams } from "react-router-dom";
import HireForm from "./components/HireForm";

function PersonProfile(props) {
  const [person, setPerson] = useState(props.person);
  const location = useLocation();
  const { id } = useParams();

  useEffect(() => {
    if (location.state) {
      setPerson(location.state.person);
    }
  }, [id, location.state]);

  if (!person) return <p>Loading...</p>;

  return (
    <article>
      <h2>
        {person.name.first} {person.name.last}
      </h2>
      <img src={person.picture.large} alt="" />
      <p>Date of Birth: {person.dob.date}</p>
      <p>Email: {person.email}</p>
      <p>Phone: {person.phone}</p>
      <p>Country: {person.location.country}</p>
      <p>City: {person.location.city}</p>
      <p>Street:{person.location.street.name}  {person.location.street.number}</p>
      
      <HireForm person={person} setHiredPeople={props.setHiredPeople} />
    </article>
  );
}

export default PersonProfile;
