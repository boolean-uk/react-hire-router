import { Link } from "react-router-dom";

function PeopleListItem({ person }) {
  const {
    phone,
    email,
    location: { country },
    id: { id },
  } = person;
  const personDetails = [
    ["Phone", phone],
    ["Email", email],
    ["Country", country],
  ];
  return (
    <li>
      <Link
        to={`view/${person.id.id}`}
        className="flex hover:drop-shadow-xl hover:contrast-75"
      >
        <div className="profile-shot">
          <img src={person.picture.large} alt="" />
          <h3
            className={`text-center border-l border-b border-sky-100 ${
              person.hired
                ? "bg-emerald-500 border-none text-slate-50"
                : "bg-white text-teal-700"
            }`}
          >
            {person.name.first} {person.name.last}
          </h3>
        </div>
        <ul className="person-details flex flex-col gap-2 justify-center p-4 bg-sky-100">
          {personDetails.map((detail) => (
            <li key={`person-detail${id}`}>
              {detail[0]}: {detail[1]}
            </li>
          ))}
          <li>{person.wage && <p>Wage: £{person.wage}</p>}</li>
        </ul>
      </Link>
    </li>
  );
}

export default PeopleListItem;
