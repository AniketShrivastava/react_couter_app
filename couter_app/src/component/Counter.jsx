import React, { useState } from 'react'

const Counter = () => {
    const [counter, setCounter] = useState(0);

    const dcrement = () => {
        setCounter(counter - 1)
    }

    const increment = () => {
        setCounter(counter + 1)
    }
    return (
        <div className="container ">
            <div className="col-sm-6  mx-auto ">
            <div className="card">
            <h1 className="text-center">Counter App</h1>
            
            <div className="form-group text-center">
            <button onClick={dcrement}>-dcrement</button>
            <span>{counter}</span>
            <button onClick={increment}>+Increment</button>
            </div>
            
            </div>



            </div>

        </div>
    )
}

export default Counter
