import { useState } from "react"
import { useNavigate } from "react-router-dom"
/* eslint react/prop-types:0 */ 
function Edit({people, update}){

    const id =/[^/]*$/.exec(window.location.pathname)[0]
    const [person, setPerson] = useState(people[id])
    const navigate = useNavigate()

    const handleSubmit = (e) => {
        e.preventDefault()
        people[0] = person
        update(people)
        navigate('/')
    }

    const handleChange = (e) => {
        const {name, value} = e.target
        setPerson({...person, [name]:value})
    }

return (
    <form onSubmit={(e) => handleSubmit(e)} className="container">
        <div className="profile">
            <p>Edit profile for <strong>{person.name.first} {person.name.last}</strong></p>
            <img src={person.picture.medium} alt="Profile" />
        </div>
        <div className="fields">
            <label> Email <br />
                <input
                    type="email"
                    name="email"
                    value={person.email}
                    onChange={handleChange}
                />
            </label>
            <label> Phone <br />
                <input
                    type="phone"
                    name="phone"
                    value={person.phone}
                    onChange={handleChange}
                />
            </label>
            <label> Wage <br />
                <input
                    type="number"
                    name="wage"
                    value={person.wage}
                    onChange={handleChange}
                />
            </label>
            <label> Gender <br />
                <input
                    type="radio"
                    name="gender"
                    value="female"
                    checked={person.gender === "female"}
                    onChange={handleChange}
                />
                Female
                <input
                    type="radio"
                    name="gender"
                    value="male"
                    checked={person.gender === "male"}
                    onChange={handleChange}
                />
                Male
                
            </label>
            <button className="edit-btn" type="submit">Save and quit!</button>
        </div>
    </form>
)
}

export default Edit