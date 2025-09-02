
import { Link, useParams } from "react-router-dom";
/* eslint-disable react/prop-types */
import PersonProfile from "../../PersonProfile";

function PeopleListItem({data, hired, setHired}) {
  const { id } = useParams();
  const person = data.find((x) => x.login.uuid === String(id));
  console.log(hired)
  return (
    <>
    <li>

      {person.wage && <p>Wage: £{person.wage}</p>}
      <PersonProfile personn={person} hired={hired} setHired={setHired}/>
    </li>

    </>

  )
}

export default PeopleListItem
