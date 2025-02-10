import React from 'react'

function Card({ title, children }) {
  return (
    <div className="card">
      {title && (
        <div className="card-header">
          <h2 className="h4 mb-0">{title}</h2>
        </div>
      )}
      <div className="card-body">{children}</div>
    </div>
  )
}

export default Card