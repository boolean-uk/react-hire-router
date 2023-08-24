import React from 'react'
// import HireForm from '../components/HireForm'
import { useLocation, Link } from 'react-router-dom'

function ProfileView({hirePerson}) {
  
  const location = useLocation(); 
  
  const person = location.state; 

  const hireNewPerson = () => {
    hirePerson(person);
  };

  if (!person) {
    return <div>Loading...</div>;
  }

  return (
    <div>
        <Link to={`/`} state={person}> 
        Back to Dashboard
      </Link>
      <h3>{person.name.first} {person.name.last} Profile</h3>
      <p>{person.name.first} {person.name.last}</p>
      <p>Email: {person.email}</p>
      <p>Wage: ${person.wage} per year</p>
      <Link to={`/`} state={person}> 
      <button onClick={hireNewPerson}>Hire</button>
      </Link>
    </div>
  );
}

export default ProfileView;