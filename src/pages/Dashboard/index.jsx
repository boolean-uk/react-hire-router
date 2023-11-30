import { useState, useEffect } from 'react';
import PeopleList from './components/PeopleList';

function Dashboard() {
  const [peoples, setPeople] = useState([]);

  useEffect(() => {
    fetch('https://randomuser.me/api/?results=50')
      .then((response) => response.json())
      .then((data) => {
        setPeople(data.results);
        console.log(data.results);
      });
  }, []);

  return (
    <main className='dashboard-layout'>
      {/* Pass the entire array of people to PeopleList */}
      <PeopleList people={peoples} />
    </main>
  );
}

export default Dashboard;
