import { Link } from "react-router-dom";

function PeopleListItem({ person }) {
  console.log("person", person);
  const {
    id: { id },
    hired,
    wage,
  } = person;
  const personDetails = [
    person.id.name,
    `${person.location.city}, ${person.location.country}`,
    hired && `£${wage}`,
  ];
  return (
    <li className="overflow-hidden rounded-lg text-teal-700">
      <Link
        to={`view/${id}`}
        className={`flex flex-col rounded-lg bg-white hover:contrast-75 hover:drop-shadow-xl ${
          hired ? "border-none" : "border-2 border-sky-100"
        }`}
      >
        <div className={`flex rounded-lg rounded-bl-none `}>
          <div className={`${hired ? "bg-emerald-500" : "bg-white"}`}>
            <img
              src={person.picture.large}
              alt=""
              className="h-36 w-36 rounded-full object-cover p-2"
            />
          </div>

          <ul className="person-details contents-center grid flex-grow flex-col items-center gap-2 bg-sky-100 p-4">
            {personDetails.map((detail) => {
              if (detail)
                return (
                  <li key={`person-detail${id}`} className="grid grid-flow-col">
                    {detail}
                  </li>
                );
            })}
          </ul>
        </div>
        <h3
          className={`rounded-b-lg px-2 ${
            hired ? "border-none bg-emerald-500 text-slate-50" : "bg-white"
          }`}
        >
          {person.name.first} {person.name.last}
        </h3>
      </Link>
    </li>
  );
}

export default PeopleListItem;
