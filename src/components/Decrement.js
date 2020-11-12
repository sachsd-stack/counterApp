import React from 'react'

const Decrement = (props) => {
    const {decrement} = props
    return (
        <button className="minusOne" onClick={decrement}>-1</button>
    )
}

export default Decrement
