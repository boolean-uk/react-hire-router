import { useEffect, useState } from 'react'
import './App.css'
import { Link, Routes, Route  } from 'react-router-dom'
import Dashboard from './pages/Dashboard'
import PersonProfile from './pages/PersonProfile'

export default function App() {

  const url = 'https://randomuser.me/api/?results=50' //calling on the url which contains the 50 random users.

  const [hiredPeople, setHiredPeople] = useState([]) //state variable
  const [people, setPeople] = useState([]) //state variable, holds an array of people which is initialized empty for now.

  useEffect(() => {                               //use effect for fetching from the api.
    const fetchdata = async () => {               //async fetching
      try {
        const response = await fetch(url)         //fetching the data from the url and storing inside response variable.
        const data = await response.json();       //converting data into json.
        setPeople(data.results)                   //updating the people state with the data results.
      }
      catch(error){
        console.e("Failed to fetch data", error)
      }
      

    }
    fetchdata()
  }, []) //empty array means that the effect runs once, when component is mounted.

  return (
    <>
      <header>
        <h1>Hire Your Team</h1>
        <nav>
          <ul>
            <li>
            <Link to="/">Dashboard</Link>
              </li>
          </ul>
        </nav>
      </header>

      {/*Routes implementation goes here*/}


      <Routes>

        <Route path="/" element={<Dashboard people={people} hiredPeople={hiredPeople}/>} />
        <Route path="/view/:id" element={<PersonProfile people={people} hiredPeople={hiredPeople} setHiredPeople={setHiredPeople}
        />} />
          
      </Routes>
    </>
  )
}



