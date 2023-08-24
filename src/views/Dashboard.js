import React, { useEffect } from 'react'
import PeopleList from '../components/PeopleList'

function Dashboard({hired, hirePerson, people, setPeople, updatePersonData}) {
  
  useEffect(() => {
    fetch('https://randomuser.me/api/?results=50')
      .then((response) => response.json())
      .then((data) => {
        const peopleWithIds = data.results.map((person, index) => ({
          ...person,
          id: index,
          wage: 0, 
        }));
        setPeople(peopleWithIds);
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
      });
  }, []);

  return (
    <>
      <h2>Dashboard</h2>
      <div className="dashboard-layout">
      <div>
        <h3>People</h3>
        <PeopleList people={people} hirePerson={hirePerson} />
      </div>
      <div>
        <h3>Hired People</h3>
        <PeopleList people={hired} isHiredList={true} updatePersonData={updatePersonData} />
      </div>
      </div>
    </>
  );
}

export default Dashboard;