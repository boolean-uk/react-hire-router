import { useParams, useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';

function PersonProfile(props) {
  const { setHiredPeople } = props;
  const { id } = useParams();
  const navigate = useNavigate();
  const [person, setPerson] = useState(null);

  useEffect(() => {
    fetch(`https://randomuser.me/api/?seed=${id}`)
      .then((response) => response.json())
      .then((data) => setPerson(data.results[0]))
      .catch((error) => console.log(error));
  }, [id]);

  const hirePerson = () => {
    setHiredPeople((prevHiredPeople) => [...prevHiredPeople, person]);
    navigate('/');
  };

  if (!person) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h2>
        {person.name.first} {person.name.last}
      </h2>
      <img src={person.picture.large} alt={`${person.name.first} ${person.name.last}`} />
      <p>Email: {person.email}</p>
      <p>Phone: {person.phone}</p>
      <button onClick={hirePerson}>Hire</button>
    </div>
  );
}

export default PersonProfile;