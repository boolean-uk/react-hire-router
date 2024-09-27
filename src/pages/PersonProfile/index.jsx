/* eslint-disable react/prop-types */
import HireForm from './components/HireForm'
import { useParams } from "react-router-dom"

export default function PersonProfile(props) {

  const { id } = useParams()
  const { people, handleUpdate } = props
  
  const person = people.find((p) => p.login.uuid === id)

  if (!person) return <p>Loading...</p>

  return (
    <article>
      <HireForm person={person} handleUpdate={handleUpdate} />
    </article>
  )
}