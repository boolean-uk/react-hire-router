/* eslint-disable react/prop-types */

import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

const EditWage = (props) => {
  const { people, hiredPeople, setPeople, setHiredPeople } = props;
  const [person, setPerson] = useState();
  const [wage, setWage] = useState(0);

  const { id } = useParams()
  const navigator = useNavigate();


  useEffect(() => {
    setPerson(people.find(p => p.id.value === id))
  }, []);

  useEffect(() => {
    if (person) {
      setWage(person.wage)
    }
  }, [person]);

  if (!person) return <p>Loading...</p>;

  const handleChange = (e) => {
    e.preventDefault();
    setWage(e.target.value)
  };


  const handleSubmit = (e) => {
    e.preventDefault();
    
    setHiredPeople([...hiredPeople.map(p => {
      if (p.id.value === id) {
        p.wage = wage
      }
      return p 
      })]);

    setPeople([...people.map(p => {
      if (p.id.value === id) {
        p.wage = wage
      }
      return p
      })]);   
    
    navigator("/");
  };



  return (
    <article>
      <h2>
        {person.name.first} {person.name.last}
      </h2>
      <form onSubmit={handleSubmit}>
        <label htmlFor="wage">Edit Wage Offer</label>
        <input
          type="text"
          id="wage"
          name="wage"
          onChange={handleChange}
          value={wage}
        />
        <button type="submit">Hire</button>
      </form>
    </article>
  );
};

export default EditWage;
