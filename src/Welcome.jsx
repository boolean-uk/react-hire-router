/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";
import PeopleList from "./pages/Dashboard/components/PeopleList";

function Welcome({data}) {
  return (
    <>
      <h2>Welcome</h2>
      <p>Here is the employee list</p>
      <PeopleList data={data}/>
      <h2>The hired list</h2>
      <p>Here are the employees who could be employed</p>


    </>
  );
}

export default Welcome;
