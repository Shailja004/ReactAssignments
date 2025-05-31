import React from 'react'

const Card = ({title, children}) => {
  return (
    <>
    <div>
        <h2>{title}</h2>
    </div>
    <div>
        <h3>{children}</h3>
        </div>
        </>
  )
}

export default Card