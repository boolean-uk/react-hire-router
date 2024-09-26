import { useState, useEffect } from 'react'
import './App.css'
import Dashboard from './pages/Dashboard'
import PersonProfile from './pages/PersonProfile'
import { Routes, Route } from 'react-router-dom'

export default function App() {
  const [hiredPeople, setHiredPeople] = useState([])
  const [people, setPeople] = useState([])

  const [dbLink, setLink] = useState('https://randomuser.me/api/?results=50')

  let filterPeople = people.filter(p => p.id != null)

  useEffect(()=>{  
    fetch('https://randomuser.me/api/?results=50')
    .then(res => res.json())
    .then(data => setPeople(data.results))
  },[dbLink])

  function  SaveHire(target){
    const updatePeople = filterPeople.filter(people => people.id !== target.id)
    
    setHiredPeople([...hiredPeople,target])
    setPeople(updatePeople, target)
   
  }
  function  UpdateHire(target){ 
    const index = hiredPeople.indexOf(people => people.id !== target.id)
    const UpdatePeople = hiredPeople;
    UpdatePeople[index]=target;
    setHiredPeople(UpdatePeople)
    
   
  }
  function removeOffer(target){
    const updateHiredPeople = hiredPeople.filter((people => people.id.value !== target.id.value) )
    const backToAllAvailable = hiredPeople.filter((people => people.id.value === target.id.value) )
   
    backToAllAvailable[0].hired = false;
    setPeople([...people, backToAllAvailable[0]])
    setHiredPeople(updateHiredPeople)
  }


  
  return (
    <><div className='App'>
      <header>
        <h1>Hire Your Team</h1>
        <nav>
          <ul>
            <li>Dashboard</li>
          </ul>
        </nav>
      </header>
<Routes>
  <Route path="/" element={<Dashboard hiredPeople={hiredPeople} allPeople={people} removeOffer={(target)=>removeOffer(target)}/>}/>
  <Route path="/view/null" element={<Dashboard hiredPeople={hiredPeople} allPeople={people} removeOffer={(target)=>removeOffer(target)}/>}/>
  <Route path="/view/:id" element={<PersonProfile people={people} newHire={(target)=>SaveHire(target)}/>}/>
  <Route path="/edit/:id" element={<PersonProfile people={hiredPeople} newHire={(target)=>UpdateHire(target)}/>}/>

</Routes>

    </div>
    </>
  )
}
