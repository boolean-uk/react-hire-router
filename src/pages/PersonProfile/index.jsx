import { useEffect, useState } from "react";
import HireForm from "./components/HireForm";
import { useParams } from "react-router-dom";

function PersonProfile(props) {
  const [person, setPerson] = useState(null);
  const { id } = useParams();
  const { URL } = props;

  useEffect(() => {
    console.log("Running useEffect in PersonProfile");
    const fetchData = async () => {
      try {
        const req = await fetch(URL + `?id=${id}`);
        const res = await req.json();
        console.log("RES: ", res);
        setPerson(res.results[0]);
        console.log("Person: ", res);
      } catch (er) {
        console.log("OBS!!! Something went wrong in PersonProfile, ", er);
      }
    };
    fetchData();
  }, [id, URL]);
  if (!person) return <p>Loading...</p>;

  return (
    <article>
      <h2>
        {person.name.first} {person.name.last}
      </h2>
      <HireForm person={person} />
    </article>
  );
}

export default PersonProfile;
