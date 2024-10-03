import { createContext, useContext, useState, useEffect } from "react";

const PeopleContext = createContext();
const url = "https://randomuser.me/api/?results=50"

export const PeopleProvider = ({children}) => {
    const [people, setPeople] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
          const response = await fetch(url);
          const jsonData = await response.json();
          setPeople(jsonData.results);
          console.log(people)
        };
        fetchData();
      }, []);

      return (
        <PeopleContext.Provider value={{people, setPeople}}>
            {children}
        </PeopleContext.Provider>
      )
}

export default PeopleProvider

export const usePeople = () => {
    return useContext(PeopleContext);
}