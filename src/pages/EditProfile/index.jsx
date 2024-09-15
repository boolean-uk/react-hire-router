import { useParams, useNavigate } from "react-router-dom";
import EditProfileForm from "./components/editProfileForm";
import { useEffect, useState } from "react";
import PropTypes from "prop-types";

export default function EditProfile(props) {
  const { people } = props;
  const [person, setPerson] = useState(null);
  let { id } = useParams();
  const navigate = useNavigate();
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    if (!people) navigate("/");
    const person = props.hiredPeople.find((person) => person.id === id);
    setPerson(person);
    setIsLoaded(true);
  }, [people, id]);

  // ...

  EditProfile.propTypes = {
    setHiredPeople: PropTypes.func.isRequired,
    setPeople: PropTypes.func.isRequired,
    hiredPeople: PropTypes.array.isRequired,
    people: PropTypes.array.isRequired,
  };

  // ...

  return (
    <div>
      {!isLoaded || !person ? (
        <div>Loading...</div>
      ) : (
        <EditProfileForm
          setHiredPeople={props.setHiredPeople}
          person={person}
          hiredPeople={props.hiredPeople}
          id={id}
        />
      )}
    </div>
  );
}
