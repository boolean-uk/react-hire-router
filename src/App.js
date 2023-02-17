import "./styles.css"
import { useState, useRef, useEffect, useLayoutEffect } from "react"
import { Routes, Route } from "react-router"
import { Link } from "react-router-dom"
import { gsap } from "gsap"
import Dashboard from './pages/Dashboard'
import PersonProfile from "./pages/PersonProfile"
import EditPersonProfile from "./pages/EditPersonProfile"

export default function App() {
  const [hiredPeople, setHiredPeople] = useState([])
  const [loading, setLoading] = useState(true)
  
  let forwardRef = []
  const header = useRef('header')

  const [people, setPeople] = useState([])

  useLayoutEffect(() => {
    if(!loading) {
      const tl = gsap.timeline({defaults: {duration: 1}})

      tl.fromTo(header.current, {y: -100}, {ease: "power4.out", y: '0%'})

      const h2refs = [forwardRef[0].children[0],forwardRef[2].children[0]]
      tl.fromTo(h2refs, {'clip-path': 'polygon(100% 100%, 0% 100%, 0% 100%, 100% 100%)', y: 20}, {ease: "power4.out",'clip-path': 'polygon(100% 100%, 0% 100%, 0% 0%, 100% 0%)', y: 0, stagger: 0.2, duration: 1})

      const line = forwardRef[1]
      tl.fromTo(line, {'clip-path': 'polygon(100% 0%, 0% 0%, 0% 0%, 100% 0%)'}, {ease: "power2.in",'clip-path': 'polygon(100% 0%, 0% 0%, 0% 100%, 100% 100%)', duration: .5})

      const li1 = forwardRef[0].children[1].children
      tl.fromTo(li1, {'clip-path': 'polygon(100% 100%, 0% 100%, 0% 100%, 100% 100%)', y: 20}, {ease: "power4.out",'clip-path': 'polygon(100% 100%, 0% 100%, 0% 0%, 100% 0%)', y: 0, stagger: 0.2})
    }
  },[loading])

  useEffect(() => {
    fetch(`https://randomuser.me/api/?results=50`)
      .then(res=>res.json())
      .then(data=>setPeople(data.results))
      .then(setLoading(false))
  },[])

  return (
    <>
    {loading ? 
      <div className="loading">Loading...</div>
    : 
      <>
      <header ref={header}>
        <h1>Hire Your Team</h1>
        <nav>
          <ul>
            <Link to={'/'}> Dashboard </Link>
          </ul>
        </nav>
      </header>
      <Routes>
        <Route path="/" element={<Dashboard hiredPeople={hiredPeople} people={people} ref={(e) =>forwardRef.push(e)}/>} />
        <Route path="/view/:id" element={<PersonProfile hiredPeople={hiredPeople} setHiredPeople={setHiredPeople}/>} />
        <Route path="/edit/:id" element={<EditPersonProfile hiredPeople={hiredPeople} setHiredPeople={setHiredPeople} />} />
      </Routes>
    </>}
    </>
  )
}
