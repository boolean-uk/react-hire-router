import PeopleListItem from './PeopleListItem'
import { useState, useEffect } from 'react'

function PeopleList() {

  const [personData, setPersonData] = useState([])

  useEffect(() => {
    fetch('https://randomuser.me/api/?results=50')
      .then((response) => {
        return response.json()
      })
      .then((data) => {
        setPersonData(data.results)
        console.log(data.results)})
  }, [])

  return (
    <ul>
      {personData.map((personItem) => (
        <PeopleListItem 
          key={personItem.login.uuid}  
          name={personItem.name.first + ' ' + personItem.name.last}
          wage={personItem.wage}
          />
      ))}
    </ul>
  )
}

export default PeopleList
