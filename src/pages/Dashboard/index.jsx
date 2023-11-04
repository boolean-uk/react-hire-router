import { useState, useEffect } from "react";

import PeopleList from "./components/PeopleList";

function Dashboard({ hiredPeople, people }) {
  return (
    <main className="dashboard-layout bg-gradient-to-r from-teal-50 to-slate-200 p-4">
      <section className="h-[calc(100vh-180px)] overflow-y-auto bg-slate-200 p-4">
        <h2 className="mb-4 text-3xl font-semibold text-teal-500">People</h2>
        <PeopleList people={people} />
      </section>
      <section className="h-[calc(100vh-180px)] overflow-y-auto bg-teal-50 p-4">
        <h2 className="mb-4 text-3xl font-semibold text-teal-500">
          Hired People
        </h2>
        <PeopleList people={hiredPeople} />
      </section>
    </main>
  );
}

export default Dashboard;
