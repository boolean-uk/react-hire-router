import { useState, useEffect } from 'react'
import HireForm from './components/HireForm'
import { useParams } from 'react-router-dom'

function PersonProfile(props) {
  const {id} = useParams();
  const {people, handleSubmit} = props;
  const person = people.find(x => x.login.uuid === id);


  if (!person) return <p>Loading...</p>;

  return (
    <article>
      <h2>
        {person.name.first} {person.name.last}
      </h2>
      <HireForm person={person} handleSubmit={handleSubmit} />
    </article>
  );
}
export default PersonProfile
