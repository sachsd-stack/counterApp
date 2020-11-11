import React from 'react'

const Decrement = (props) => {
    const {decrement} = props
    return (
        <div>
            <button className="minusOne" onClick={decrement}>-1</button>
        </div>
    )
}

export default Decrement
