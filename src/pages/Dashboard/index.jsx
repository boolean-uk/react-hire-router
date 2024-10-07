import PropTypes from 'prop-types';
import PeopleList from './components/PeopleList';

function Dashboard({ people, hiredPeople }) {
  return (
    <main className="dashboard-layout">
      <section>
        <h2>Available People</h2>
        <PeopleList people={people.filter(person => !hiredPeople.some(hired => hired.login.uuid === person.login.uuid))} />
      </section>
      <section>
        <h2>Hired People</h2>
        <PeopleList people={hiredPeople} />
      </section>
    </main>
  );
}

Dashboard.propTypes = {
  people: PropTypes.array.isRequired,
  hiredPeople: PropTypes.array.isRequired,
};

export default Dashboard;




