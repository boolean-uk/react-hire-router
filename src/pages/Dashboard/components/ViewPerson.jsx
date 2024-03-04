import { useState, useContext } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { hiredPeopleContext } from '../../../App';
import HireForm from '../../PersonProfile/components/HireForm';

export default function ViewPerson(props) {
  const { hiredPeople, setHiredPeople } = useContext(hiredPeopleContext);
  const { people } = props;
  const { index } = useParams()
  const navigate = useNavigate()
  const person = people[index]

  const [wage, setWage] = useState(0);
  const [EditMode, setEditmode] = useState(false);

  const defaultForm = {
    firstName: person.name.first,
    lastName: person.name.last,
    email: person.email,
    phone: person.phone,
    city: person.location.city,
    state: person.location.state,
    age: person.dob.age,
    wage: person.wage
  }


  const [form, setForm] = useState(defaultForm);

  const isPersonHired = hiredPeople.some(hiredPerson => hiredPerson.login.uuid === person.login.uuid);

  const handleEditPerson = () => {
    setEditmode(true);
    }


  const handleSubmit = (event) => {
    event.preventDefault();
    //update selected person
    const updatedPerson = {
      ...person,
      name: {
        first: form.firstName,
        last: form.lastName
      },
      email: form.email,
      phone: form.phone,
      location: {
        city: form.city,
        state: form.state
      },
      dob: {
        age: form.age
      },
      wage: form.wage
    }
    people[index] = updatedPerson;
    setForm({
      firstName: updatedPerson.name.first,
      lastName: updatedPerson.name.last,
      email: updatedPerson.email,
      phone: updatedPerson.phone,
      city: updatedPerson.location.city,
      state: updatedPerson.location.state,
      age: updatedPerson.dob.age,
      wage: updatedPerson.wage
    })
    setEditmode(false);
    setHiredPeople([...hiredPeople.filter(hiredPerson => hiredPerson.login.uuid !== person.login.uuid), updatedPerson]);  
  }

  const handleRemove = () => {
    person.wage = null;
    setHiredPeople(hiredPeople.filter(hiredPerson => hiredPerson.login.uuid !== person.login.uuid));
    setEditmode(false);
    alert(`${person.name.first} ${person.name.last} has been removed from the list`)
    navigate("/")
  }

  const handleCancel = () => {
    setForm(defaultForm)
    setEditmode(false);
  }

  const handleChange = (event) => {
    setForm({ ...form, [event.target.id]: event.target.value });
  }

  if(!people)
    return (
      <p>Loading...</p>
    )

  return (
    <div>
      <button onClick={() => console.log(hiredPeople)}>PEOPLE BUTTON!!!!!!!!!!!!!!</button>
      <button onClick={() => navigate("/")}>Back to dashboard</button>
      <h2>{person.name.first} {person.name.last}</h2>
      <p>Email: {person.email}</p>
      <p>Phone: {person.phone}</p>
      <p>Location: {person.location.city}, {person.location.state}</p>
      <p>Age: {person.dob.age}</p>
      <img src={person.picture.large} alt="person" />
      <div>
      {!isPersonHired && <HireForm person={person} wage={wage} setWage={setWage} index={index} />}
      {isPersonHired && <p>Wage: £ {person.wage || 0}</p>}
      {isPersonHired && 
      <>
        <p>{person.name.first} {person.name.last} is an employee</p>
        <button onClick={handleEditPerson}>EDIT</button>
      </>
      }

      {isPersonHired && EditMode &&
      <div>
        <h2>Edit {person.name.first} {person.name.last}</h2>
        <form onSubmit={handleSubmit}>
          <label htmlFor='firstName'>First name</label>
          <input type='text' id='firstName' value={form.firstName} onChange={handleChange}/>
          <label htmlFor='lastName'>Last name</label>
          <input type='text' id='lastName' value={form.lastName} onChange={handleChange}/>
          <label htmlFor='email'>Email</label>
          <input type='text' id='email' value={form.email} onChange={handleChange}/>
          <label htmlFor='phone'>Phone</label>
          <input type='text' id='phone' value={form.phone} onChange={handleChange}/>
          <label htmlFor='city'>City</label>
          <input type='text' id='city' value={form.city} onChange={handleChange}/>
          <label htmlFor='state'>State</label>
          <input type='text' id='state' value={form.state} onChange={handleChange}/>
          <label htmlFor='age'>Age</label>
          <input type='text' id='age' value={form.age} onChange={handleChange}/>
          <label htmlFor='wage'>Wage</label>
          <input type='text' id='wage' value={form.wage} onChange={handleChange}/>
          <button type='submit'>Save</button>
          {/* remove from list */}
          <button onClick={handleRemove}>Remove</button>
          <button onClick={handleCancel}>Cancel</button>
      </form>
      </div>
      }

      </div>
    </div>
  )
}
