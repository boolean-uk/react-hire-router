import { useEffect, useState } from "react";
import PeopleList from "./components/PeopleList";

function Dashboard(props) {
    const { hiredPeople, setHiredPeople, people, editMode, setPeople } = props;

    return (
        <main className="dashboard-layout">
            <section>
                <h2>People</h2>
                <PeopleList
                    people={people}
                    listName="people"
                    setPeople={setPeople}
                />
            </section>
            <section>
                <h2>Hired People</h2>
                <PeopleList
                    people={hiredPeople}
                    listName="hiredPeople"
                    hiredPeople={hiredPeople}
                    setHiredPeople={setHiredPeople}
                    editMode={editMode}
                    setPeople={setPeople}
                />
            </section>
        </main>
    );
}

export default Dashboard;
