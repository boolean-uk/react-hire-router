import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";

function HireForm({person, people, setPeople, setHiredPeople, hiredPeople}) {
  const [wage, setWage] = useState(0);
  const navigate = useNavigate();


  function handleSubmit(event) {
    event.preventDefault();
    setHiredPeople([...hiredPeople, {...person, wage: wage}]);

    const personIndex = people.findIndex((p) => p.id === person.id);

    const updatePeople = people.map((p, index)=>{
      if(personIndex === index){
        return {...p, wage:wage};
      }
      return p;
    });
    setPeople(updatePeople);
    navigate("/");
}

  

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="wage">Wage Offer</label>
      <input
        type="text"
        id="wage"
        name="wage"
        onChange={(e) => setWage(e.target.value)}
        value={wage}
      />
      <button type="submit">Hire</button>
    </form>
  );
}

export default HireForm;
