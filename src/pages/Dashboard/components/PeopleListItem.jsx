import {Link} from 'react-router-dom'


function PeopleListItem(props) {
  // eslint-disable-next-line react/prop-types
  const { person, hired } = props

  const linkProps = {
    // eslint-disable-next-line react/prop-types
    to: hired ? `/edit/${person.email}` : `/view/${person.email}`,
    state: { person },
    className: hired ? "edit-worker" : "view-worker"
  };

  return (
    <li>
      <h3>
        {/* eslint-disable-next-line react/prop-types */}
        {person.name.first} {person.name.last}
      </h3>
       {/* eslint-disable-next-line react/prop-types */}
      {person.wage && <p>Wage: £{person.wage}</p>}
      <Link {...linkProps}>
        {hired ? "Edit Worker" : "View Worker"}
      </Link>
    </li>
  )
}

export default PeopleListItem
