/* eslint-disable react/prop-types */
import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

export default function EditProfile({hiredPeople, setHiredPeople}){
    const {id} = useParams();
    const person = hiredPeople.find((x) => x.login.uuid === id)
      
    
    
    const [edited, setEdited] = useState(person)
      
    const navigate = useNavigate()

    function handleChange(event){
    const {name, value} = event.target
    setEdited({
        ...edited,
        name: {
          ...edited.name,
          [name]: value
      }})
  }

    
    function handleSubmit(event) {
        event.preventDefault()
        setHiredPeople(hiredPeople.filter((item) => item.login.uuid != person.login.uuid))
        setHiredPeople(prev => [...prev, edited])
        navigate('/')
    }
    
    if (!person) return <p>Loading...</p>

    return (
    <form className="form-col" onSubmit={handleSubmit}>
        <img src={person.picture.large} alt="" className="pic"/>
        <label>
            Title:
            <input
            type="text"
            name="title"
            onChange={handleChange}
            value={edited.name.title} />
        </label>
        <label>
            First name:
            <input
            type="text"
            name="first"
            onChange={handleChange}
            value={edited.name.first} />
        </label>
        <label>
            Last name:
            <input
            type="text"
            name="last"
            onChange={handleChange}
            value={edited.name.last} />
        </label>
        <button type="submit">Save changes</button>
    </form>
    )
}