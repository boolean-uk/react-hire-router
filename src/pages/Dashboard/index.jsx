import PropTypes from "prop-types"

import PeopleList from "./components/PeopleList";

function Dashboard({ hiredPeople, people }) {
  return (
    <main className="dashboard-layout bg-gradient-to-r from-teal-50 to-slate-200 p-4">
      <section className="h-[calc(100vh-180px)] overflow-y-auto bg-slate-200 p-4">
        <h2 className="mb-4 text-3xl font-semibold text-teal-500">People</h2>
        <PeopleList people={people} list="applicant" />
      </section>
      <section className="h-[calc(100vh-180px)] overflow-y-auto bg-teal-50 p-4">
        <h2 className="mb-4 text-3xl font-semibold text-teal-500">
          Hired People
        </h2>
        <PeopleList people={hiredPeople} list="hired" />
      </section>
    </main>
  );
}

Dashboard.propTypes = {
  hiredPeople: PropTypes.arrayOf(
    PropTypes.object
  ),
  people: PropTypes.arrayOf(
    PropTypes.object
  )
}

export default Dashboard;
