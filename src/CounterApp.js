import React, { useState } from 'react'
import Image from './Image'
import PropTypes from 'prop-types'

const CounterApp = ({ value = 10 }) => {

    const [ counter, setCounter ] = useState( value ); // []
    
    // list of events

    // handleAdd
    const handleAdd = () => {
        setCounter( counter + 1);
        // setCounter( (c) => c + 1 );
    }

    const handleSubtract = () => setCounter( counter - 1);
    
    const handleReset = () => setCounter( value );


    return (
        // fragment
        <>
            <h1>CounterApp</h1>
            < Image />
            <h2> { counter } </h2>

            <button onClick={ handleAdd }>+1</button>
            <button onClick={ handleReset }>Reset</button>
            <button onClick={ handleSubtract }>-1</button>
        </>
    )
}

CounterApp.propTypes = {
    value: PropTypes.number
}

export default CounterApp;


