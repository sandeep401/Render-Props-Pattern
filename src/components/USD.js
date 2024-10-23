import React from 'react'

const USD = ({amount}) => {
  return (
    <div>
        <h3>USD : { amount * 0.012 }</h3>
    </div>
  )
}

export default USD