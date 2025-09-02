import { Routes, Route, Link, useLocation } from 'react-router-dom'


function PeopleListItem(props) {
  const { person } = props

  // if (!person?.login) return <></>

  return (
    <li>
      <Link to={`/view/${person.login.uuid}`} state={{person:person}}>
      <h3>
        {person.name.first} {person.name.last}
      </h3>
      {person.wage && <p>Wage: £{person.wage}</p>}
      </Link>
    </li>
  )
}

export default PeopleListItem
