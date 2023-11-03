import { Routes, Route, Link } from "react-router-dom";
import PersonProfile from "../../PersonProfile";

export default function PeopleListItem(props) {
  const { person } = props;

  return (
    <li>
      <h3>
        <Link to={`/PersonProfile/${person.id}`}>
          {person.name.first} {person.name.last}
        </Link>
      </h3>
      {person.wage && <p>Wage: £{person.wage}</p>}
    </li>
  )
}

<Routes>
  <Route path="/PersonProfile/:personId" element={<PersonProfile />} />
</Routes>
