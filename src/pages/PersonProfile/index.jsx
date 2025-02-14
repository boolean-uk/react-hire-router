import {useEffect, useState} from 'react'
import personShape from "../../validators/personShape.js";
import PropTypes from "prop-types";
import {useNavigate, useParams} from "react-router-dom";

function PersonProfile(props) {
  const {people, setPeople} = props
  const [form, setForm] = useState(null)
  const id = Number.parseInt(useParams().id)
  const navigate = useNavigate()

    useEffect(() => {
        setForm(people[id])
    }, [id, people])

  if (!form) return <p>Loading...</p>

    const handleChange = (event) => {
        let wage = Number.parseInt(event.target.value)

        setForm({...form, wage: Number.isNaN(wage) ? 0 : wage})
    }

    const handleUpdatePerson = () => {
        setPeople((people) => {
            return people.map((p) => {
                if (p.id.value === form.id.value) {
                    return form
                }
                return p
            })
        })
        alert("Saved!")
        navigate("/")
    }

  return (
    <article>
      <h2>
        {form.name.first} {form.name.last}
      </h2>
        {/*<HireForm person={person} />*/}
        <input type={"text"} placeholder={"Wage"} onChange={handleChange} value={form.wage ?? 0}/>
        <button onClick={handleUpdatePerson}>Save</button>
    </article>
  )
}

PersonProfile.propTypes = {
  people: PropTypes.arrayOf(personShape),
  setPeople: PropTypes.func.isRequired
}

export default PersonProfile
