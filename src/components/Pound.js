import React from 'react'

const Pound = ({amount}) => {
  return (
    <div>
        <h3>Pound : { amount * 0.0092 }</h3>
    </div>
  )
}

export default Pound