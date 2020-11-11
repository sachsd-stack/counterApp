import React from 'react'

const Increment = (props) => {
    const {increment} = props
    return (
        <div>
            <button className="minusOne" onClick={increment}>+1</button>
        </div>
    )
}

export default Increment
