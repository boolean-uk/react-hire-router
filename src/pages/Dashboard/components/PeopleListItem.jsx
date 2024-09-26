import { Route, Routes, Link } from "react-router-dom"
import PersonProfile from "../../PersonProfile"

function PeopleListItem(props) {
  const { person } = props

  

  return (
    <li>
      <h3>
       {person.name.first} {person.name.last}
      </h3>
      <p>wage: {person.wage && <p>Wage: £{person.wage}</p>}</p>
      <Link to={`/view/${person.login.username}`} state={{ person }}> View Profile </Link>
    </li>
  )
}

<Routes>
  <Route path="/PersonProfile" element={<PersonProfile PersonProfile={PersonProfile}/>} >
  </Route>
</Routes>

export default PeopleListItem
