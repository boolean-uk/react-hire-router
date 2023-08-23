import { useState } from "react"
import { Routes, Route, Link } from 'react-router-dom'
import "./styles.css"
import Dashboard from "./pages/Dashboard"
import PersonProfile from "./pages/PersonProfile"

export default function App() {
  const [hiredPeople, setHiredPeople] = useState([])
  const [editId, setEditId] = useState(null)

  const updateHiredPeople = (hiredPerson) => {
    if (editId === null) {
      const newList = [...hiredPeople, hiredPerson]
      setHiredPeople(newList)
    } else {
      const newList = [...hiredPeople]
      const index = newList.findIndex(item =>
        (item.id.name + item.id.value) === editId
      )
      newList[index] = hiredPerson
      setHiredPeople(newList)
      setEditId(null)
    }
  }

  const handleEdit = id => setEditId(id)

  return (
    <>
      <header>
        <h1>Hire Your Team</h1>
        <nav>
          <ul>
            <li><Link to='/'>Dashboard</Link></li>
          </ul>
        </nav>
      </header>

      <Routes>
        <Route path='/' element={<Dashboard hiredPeople={hiredPeople} handleEdit={handleEdit} />} />
        <Route path='/view/:id' element={<PersonProfile updateHiredPeople={updateHiredPeople} />} />
      </Routes>
    </>
  )
}
