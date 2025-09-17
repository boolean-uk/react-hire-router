import {useEffect, useState} from 'react'
import './App.css'
import {Route, Routes} from "react-router-dom";
import Dashboard from "./pages/Dashboard/index.jsx";
import PersonProfile from "./pages/PersonProfile/index.jsx";

export default function App() {
    const [hiredPeople, setHiredPeople] = useState([]);
    const [randomPeople, setRandomPeople] = useState([]);

    const fetchRandomPeople = async () => {
        const response = await fetch('https://randomuser.me/api/?results=50');
        const data = await response.json();
        console.log(data.results);
        setRandomPeople(data.results);
    }
    
    const onHire = (person) => {
        setHiredPeople((prevState) => [...prevState, person]);
        console.log(hiredPeople);
    }
    
    const onUpdate = (person) => {
        const index = hiredPeople.findIndex((use) => use.login.uuid === person.login.uuid);
        
        if (index > -1) {
            hiredPeople[index] = person;
        }
        setHiredPeople(hiredPeople);
    }

    useEffect(() => {
        fetchRandomPeople();
    }, []);

    return (
        <div>
            <Routes>
                <Route path="/" element={<Dashboard randomPeople={randomPeople} hiredPeople={hiredPeople}/>}/>
                <Route path="/view/:id" element={<PersonProfile people={randomPeople.concat(hiredPeople)} onHire={onHire} canEdit={false} onUpdate={()=>{}}/>}/>
                <Route path="/edit/:id" element={<PersonProfile people={hiredPeople} onUpdate={onUpdate} canEdit={true}/>}/>
            </Routes>

        </div>
    )
}
