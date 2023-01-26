import { Route, Routes, Link } from "react-router-dom"
import PersonProfile from "./../../PersonProfile/index"

function PeopleListItem(props) {
  const { person } = props
 

  // const personToLowercase = person.id.name.toLowerCase()

  

  return (
    <>
    <li>
      <Link to={`/view/${person.index}`} state={person}> {person.name.first} {person.name.last} </Link>
      {person.wage && <p>Wage: £{person.wage}</p>}
      {console.log("this is the index",person.index)}
    </li>
    {/* <Routes>
      <Route path={`/view/`} element={<PersonProfile />} />
    </Routes> */}
    </>
  )
}

export default PeopleListItem
