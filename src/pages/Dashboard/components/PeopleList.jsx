import PeopleListItem from './PeopleListItem'
import { Link } from "react-router-dom";
/* eslint-disable react/prop-types */
function PeopleList({data}) {
  console.log(data)
  if (!data) return <></>;
  if (data.hasOwnProperty('results')) {
    console.log(data)
    console.log("has results");
    data = data.results;
    console.log("So the results");

    console.log(data)
  }
  return (
    <>
      {data.map((person, index) =>(
        <>
        <img
        src={person.picture.medium}
        style={{ width: "50px", height: "50px" }}
        />

        <Link to={`/view/${person.login.uuid}`}>
        <li 
        onClick={() => console.log(person.name.first)}
        key={index} >{person.name.first} {person.name.last}</li>
        </Link>

    </>

      ))}
   </>
  )
}

export default PeopleList
