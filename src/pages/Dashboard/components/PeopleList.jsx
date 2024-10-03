/* eslint-disable react/prop-types */
import PeopleListItem from './PeopleListItem'

export default function PeopleList({ people }) {
  // eslint-disable-next-line react/prop-types
  

  return (
    <ul>
      {people.map((person, index) => (
        <PeopleListItem key={index} person={person} />
      ))}
    </ul>
  )
}

{/* rendering the list of people. importing PeopleListItem which is rendering
  details of each person.

  components accepts people prop which is array. 

  <ul> contains the list of people. 
  mapping over the people array and "creates" a peoplelistitem for each person.
  key is unique for each person and is set to index. person prop contains data for that individual.
  
  
  */}