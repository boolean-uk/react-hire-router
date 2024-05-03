/* eslint-disable react/prop-types */
import { useEffect, useState } from "react"
import PeopleList from "./components/PeopleList"
import { Routes, Route } from "react-router-dom"
import PersonProfile from "../PersonProfile"

function Dashboard(props) {
    const { hiredPeople, setHiredPeople} = props

    const [people, setPeople] = useState([])

    useEffect(() => {
        fetch("https://randomuser.me/api/?results=50")
            .then((response) => response.json())
            .then((json) => setPeople([...json.results]))
            .catch(new Error("Error in contact fetch"))
    }, [])

    return (
        <>
            <main className="dashboard-layout">
                <section>
                    <h2>People</h2>
                    <PeopleList people={people} />
                </section>
                <section>
                    <h2>Hired People</h2>
                    <PeopleList people={hiredPeople} />
                </section>
            </main>

            <Routes>
                <Route
                    path="/person/:username"
                    element={<PersonProfile people={people} hiredPeople={hiredPeople} setHiredPeople={setHiredPeople}/>}
                />
            </Routes>
        </>
    )
}

export default Dashboard
