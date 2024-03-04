import React, { useEffect, useState, useContext } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { hiredPeopleContext } from '../../../App';

export default function ViewPerson(props) {
  const { people } = props;
  const { index } = useParams()
  const navigate = useNavigate()
  const { hiredPeople, setHiredPeople } = useContext(hiredPeopleContext);


  const handleHirePerson = () => {
    setHiredPeople([...hiredPeople, people[index]])
    console.log("PERSON HIRED!")
    navigate("/")
  }


  if(!people)
    return (
      <p>Loading...</p>
    )

    const isPersonHired = hiredPeople.some(
      hiredPerson => hiredPerson.login.uuid === people[index].login.uuid
    );

  return (
    <div>
      <button onClick={() => console.log(hiredPeople)}>PEOPLE BUTTON!!!!!!!!!!!!!!</button>
      <button onClick={() => navigate("/")}>Back to dashboard</button>
      <h2>{people[index].name.first} {people[index].name.last}</h2>
      <p>Email: {people[index].email}</p>
      <p>Phone: {people[index].phone}</p>
      <p>Location: {people[index].location.city}, {people[index].location.state}</p>
      <p>Age: {people[index].dob.age}</p>
      <img src={people[index].picture.large} alt="person" />
      <div>
      {!isPersonHired && <button onClick={handleHirePerson}>Hire person</button>}
      </div>
    </div>
  )
}
