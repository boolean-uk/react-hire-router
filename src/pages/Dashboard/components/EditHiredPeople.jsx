import { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';

export default function EditHiredPeople({ hiredPeople, setHiredPeople }) {
  const navigate = useNavigate();
  const [productToUpdate, setProductToUpdate] = useState({
    name: { first: '', last: '' },
    location: { city: '', state: '' },
    email: '',
    dob: { age: '' },
  });
  const { id } = useParams();

  useEffect(() => {
    const foundPerson = hiredPeople.find(
      (aPerson) => aPerson.name.first + aPerson.name.last === id
    );
    if (foundPerson) {
      setProductToUpdate(foundPerson);
    }
  }, [hiredPeople, id]);

  function handleChange(event) {
    const { name, value } = event.target;
    if (name.includes('.')) {
      const levels = name.split('.');
      setProductToUpdate((prevState) => ({
        ...prevState,
        [levels[0]]: {
          ...prevState[levels[0]],
          [levels[1]]: value,
        },
      }));
    } else {
      setProductToUpdate((prevState) => ({
        ...prevState,
        [name]: value,
      }));
    }
  }

function handleSubmit(event) {
  event.preventDefault();
  setHiredPeople(prevHiredPeople =>
    prevHiredPeople.map(submission =>
      (submission.name.first + submission.name.last) === id
        ? { ...submission, ...productToUpdate } // Correctly spread productToUpdate
        : submission
    )
  );
  navigate('/')
}


  // Render form with controlled components
  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="firstName">First Name:</label>
      <input
        type="text"
        id="firstName"
        name="name.first"
        onChange={handleChange}
        value={productToUpdate.name.first}
      />
      <br />
      <label htmlFor="lastName">Last Name:</label>
      <input
        type="text"
        id="lastName"
        name="name.last"
        onChange={handleChange}
        value={productToUpdate.name.last}
      />
     <br />
      <label htmlFor="city">City:</label>
      <input
        type="text"
        id="city"
        name="location.city"
        onChange={handleChange}
        value={productToUpdate.location.city}
      />
      <br />
      <label htmlFor="state">State:</label>
      <input
        type="text"
        id="state"
        name="location.state"
        onChange={handleChange}
        value={productToUpdate.location.state}
      />
      <br />
      <label htmlFor="email">Email:</label>
      <input
        type="email"
        id="email"
        name="email"
        onChange={handleChange}
        value={productToUpdate.email}
      />
      <br />
      <label htmlFor="age">Age:</label>
      <input
        type="number"
        id="age"
        name="dob.age"
        onChange={handleChange}
        value={productToUpdate.dob.age}
      />
      <br />
      <button type="submit">Edit</button>
    </form>
  );
}
