import { useEffect, useState } from "react";
import HireForm from "./components/HireForm";
import { useParams } from "react-router-dom";
import PropTypes from "prop-types";

function PersonProfile(props) {
  const [person, setPerson] = useState(null);
  const { peopleList, HirePerson } = props;
  const { id } = useParams();

  PersonProfile.propTypes = {
    people: PropTypes.array,
    hiredPersonsList: PropTypes.func,
  };

  // UseEffect to find the person by id
  useEffect(() => {
    const search = peopleList.find((person) => person.login.uuid === id);
    if (search) {
      setPerson(search);
    } else {
      console.log("Person not found");
    }
  }, [id, peopleList]);

  // If the person is not found, return a message
  if (!person) return <p>Loading...</p>;

  //  Return the person's profile and the HireForm component
  return (
    <article>
      <h3>
        Name: {person.name.first} {person.name.last} <br />
        Age: {person.dob.age} <br />
        Email: {person.email} <br />
        Phone: {person.phone} <br />
        City: {person.location.city} <br />
        State: {person.location.state} <br />
        County: {person.location.country} <br />
        PostCode: {person.location.postcode} <br />
      </h3>
      <HireForm person={person} HirePerson={HirePerson} />
    </article>
  );
}

PersonProfile.propTypes = {
  peopleList: PropTypes.array,
  HirePerson: PropTypes.func,
};

export default PersonProfile;
