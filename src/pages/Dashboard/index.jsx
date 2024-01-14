/* eslint-disable react/prop-types */
import { useState, useEffect} from 'react';
import {Routes, Route } from 'react-router-dom';
import PeopleList from './components/PeopleList';
import PersonProfile from '../PersonProfile';

function Dashboard(props) {
  const { hiredPeople, onHirePerson } = props;  

  const [people, setPeople] = useState([]);

  const fetchUser = () => {
    fetch("https://randomuser.me/api/?results=30")
      .then((response) => response.json())
      .then((data) => setPeople(data.results));
  }

  useEffect(() => {
    fetchUser();
  }, []);

  return (
    <main className="dashboard-layout">
      <section>
        <h2>People</h2>
        <PeopleList people={people} onHirePerson={onHirePerson} />
      </section>
      <section>
        <h2>Hired People</h2>
        <Routes>
        <Route
          path='/view/:id'
          element={<PersonProfile hiredPeople={hiredPeople} onHirePerson={onHirePerson} />}
        />
        </Routes>
      </section>
    </main>
  );
}

export default Dashboard;
