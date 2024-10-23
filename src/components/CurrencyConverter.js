import React, { useState } from 'react'

const CurrencyConverter = ({render}) => {

    const [amount , setAmount] = useState()

    const handleCurrencyChange =(e)=> setAmount(e.target.value)

  return (
    <>
        <h2>Currency Converter</h2>
        INR : <input type="number" placeholder="Enter Amount..." onChange={handleCurrencyChange} />
        <div>
            {render(amount)}
        </div>

    </>
  )
}

export default CurrencyConverter