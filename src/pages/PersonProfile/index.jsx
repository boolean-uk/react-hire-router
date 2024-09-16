//import { useState } from 'react'
import HireForm from './components/HireForm'
import { useParams } from 'react-router-dom'

import PropTypes from 'prop-types'

PersonProfile.propTypes = {
  people: PropTypes.array,
  hiredCallback: PropTypes.func
}

function PersonProfile({ people, hiredCallback }) {
  //const [person, setPerson] = useState(null)
  //const id = useParams().id

  //if (person === null || person === undefined) return <p>Loading...</p>

  const _presonOut = people[useParams().id]

  return (
    <article>
      <h2>
        {_presonOut.name.first} {_presonOut.name.last}
      </h2>
      <HireForm person={_presonOut} hiredCallback={hiredCallback} />
    </article>
  )
}

export default PersonProfile
