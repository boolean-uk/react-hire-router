import { useState, useEffect } from 'react'
import './App.css'
import Dashboard from './pages/Dashboard'
import { Routes, Route } from 'react-router-dom'
import PersonProfile from './pages/PersonProfile'

export default function App() {
    const [hiredPeople, setHiredPeople] = useState([])
    const [people, setPeople] = useState([])

    useEffect(() => {
        fetch('https://randomuser.me/api/?results=50')
            .then((res) => {
                return res.json()
            })
            .then((data) => {
                console.log(data)
                setPeople(data.results)
            })
    }, [])

    return (
        <>
            <header>
                <h1>Hire Your Team</h1>
                <nav>
                    <ul>
                        <Routes>
                            <Route
                                path='/'
                                element={
                                    <Dashboard
                                        people={people}
                                        hiredPeople={hiredPeople}
                                    />
                                }
                            />
                            <Route
                                path='/view/:id'
                                element={
                                    <PersonProfile
                                        people={people}
                                        hiredPeople={hiredPeople}
                                        setHiredPeople={setHiredPeople}
                                    />
                                }
                            />
                        </Routes>
                    </ul>
                </nav>
            </header>
        </>
    )
}
