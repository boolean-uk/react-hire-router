import React, { useEffect, useState } from 'react';
import PeopleList from './components/PeopleList';

function Dashboard() {
  const [people, setPeople] = useState([]);
  const [hiredPeople, setHiredPeople] = useState([]);

  useEffect(() => {
    fetch('https://randomuser.me/api/?results=50')
      .then(response => response.json())
      .then(data => setPeople(data.results))
      .catch(error => console.error('Error fetching people:', error));
  }, []);

  const hirePerson = (person) => {
    setHiredPeople([...hiredPeople, person]);
  };

  return (
    <div className="App">
      <h1>Dashboard</h1>
      <div className="dashboard-layout">
        <div>
          <h2>People</h2>
          <PeopleList people={people} onHire={hirePerson} />
        </div>
        <div>
          <h2>Hired People</h2>
          <PeopleList people={hiredPeople} />
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
