import { useContext, useEffect } from 'react';
import PeopleListItem from './PeopleListItem';

import { AppContext } from '../../../App';

const API_URL = 'https://randomuser.me/api/?results=50&seed=boolean';

function PeopleList() {
  const { people, setPeople } = useContext(AppContext);

  useEffect(() => {
    fetch(API_URL)
      .then((res) => res.json())
      .then((data) => {
        if (data) {
          setPeople(data.results);
        }
      });
  }, []);

  return (
    <>
      <ul>
        {people.map((person, index) => (
          <PeopleListItem key={index} person={person} />
        ))}
      </ul>
    </>
  )
}

export default PeopleList;
