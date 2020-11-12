import React from 'react'

const Increment = (props) => {
    const {increment} = props
    return (
        <button className="plusOne" onClick={increment}>+1</button>
    )
}

export default Increment
