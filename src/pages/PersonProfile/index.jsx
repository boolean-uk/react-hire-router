import { useState } from 'react'
import HireForm from './components/HireForm'
import { useLocation } from 'react-router-dom'
import PeopleList from '../Dashboard/components/PeopleList'

export default function PersonProfile(props) {
  const [person, setPerson] = useState(null)

  if (!person) return <p>Loading...</p>

  function Dashboard({ hiredPeople }) {
    const [people, setPeople] = useState([])

    useEffect(() => {
      fetch('https://randomuser.me/api/?results=50')
        .then(res => res.json())
        .then(data => setPeople(data.results))
    }, [])



    return (
      <article>
        <h2>
          {personData.name.first} {personData.name.last}
        </h2>
        <HireForm person={person} />
        <HireForm person={personData} hirePerson={hirePerson} edit={editFlag} />
      </article>
    )
  }}