import { useState } from 'react'
import PeopleList from './components/PeopleList'
import { useNavigate } from 'react-router-dom';

function Dashboard(props) {
  const { people, hiredPeople, onHire} = props;
  const navigate = useNavigate();

  const viewProfile = (uuid) => {
    navigate(`/view/${uuid}`);
  };

  return (
    <main className="dashboard-layout">
      <section>
        <h2>People</h2>
        <PeopleList
          people={people}
          onHire={onHire}
          onView={viewProfile}
        />
      </section>
      <section>
        <h2>Hired People</h2>
        <PeopleList
          people={hiredPeople}
          onView={viewProfile}
        />
      </section>
    </main>
  );
}

export default Dashboard
