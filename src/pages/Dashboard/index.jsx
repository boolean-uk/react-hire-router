import { useState, useEffect } from "react";

import PeopleList from "./components/PeopleList";

function Dashboard({ hiredPeople, people }) {
  return (
    <main className="dashboard-layout p-4 bg-gradient-to-r from-teal-50 to-slate-200">
      <section className="p-4 bg-slate-200 h-[calc(100vh-180px)] overflow-y-auto">
        <h2 className="text-teal-500 text-3xl font-semibold mb-4">People</h2>
        <PeopleList people={people} />
      </section>
      <section className="p-4 bg-teal-50 h-[calc(100vh-180px)] overflow-y-auto">
        <h2 className="text-teal-500 text-3xl font-semibold mb-4">Hired People</h2>
        <PeopleList people={hiredPeople} />
      </section>
    </main>
  );
}

export default Dashboard;
