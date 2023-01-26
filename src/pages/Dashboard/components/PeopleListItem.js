import { Route, Routes, Link } from "react-router-dom"


function PeopleListItem(props) {
  const { person } = props
  console.log("trying to find the key")

  // const personToLowercase = person.id.name.toLowerCase()

  console.log(person)

  return (
    <>
    <li>
      <Link to={`/view/${person.id.value}`} person={person}> {person.name.first} {person.name.last} </Link>
      {person.wage && <p>Wage: £{person.wage}</p>}
    </li>
    <Routes>
      <Route path={`/view/${person.id.value}`} element={</>} />
    </Routes>
    </>
  )
}

export default PeopleListItem
