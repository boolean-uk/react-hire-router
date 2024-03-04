import React, { useEffect, useState, useContext } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { hiredPeopleContext } from '../../../App';
import HireForm from '../../PersonProfile/components/HireForm';

export default function ViewPerson(props) {
  const { people } = props;
  const { index } = useParams()
  const navigate = useNavigate()
  const { hiredPeople, setHiredPeople } = useContext(hiredPeopleContext);
  const [wage, setWage] = useState(0);
  
  const handleEditPerson = () => {

    }

  if(!people)
    return (
      <p>Loading...</p>
    )

    const isPersonHired = hiredPeople.some(
      hiredPerson => hiredPerson.login.uuid === people[index].login.uuid
    );

    if(isPersonHired) console.log("PROPS: ", props)

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
      {!isPersonHired && <HireForm person={people[index]} wage={wage} setWage={setWage} index={index} />}
      {isPersonHired && <p>Wage: £ {people[index].wage || 0}</p>}
      {isPersonHired && 
      <>
        <p>Person is already hired!</p>
        <button onClick={handleEditPerson}>EDIT</button>
      </>
      }
      </div>
    </div>
  )
}
