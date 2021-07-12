import React from 'react';
import PropTypes from 'prop-types';
// import React, { Fragment } from 'react';

const PrimeraApp = ({ saludo, subtitulo }) => {

    return (
        /*fragment*/
        <>
            <h1> { saludo } </h1>
            {/* <pre> {  JSON.stringify( saludo, null, 3 )  } </pre> */}
            <p> { subtitulo } </p>
        </>
    );
        
} 
// validations to have more control over each props.
PrimeraApp.propTypes = {
    saludo: PropTypes.string.isRequired
}

// default properties.
PrimeraApp.defaultProps = {
    subtitulo: 'Soy un subtitulo'
}


export default PrimeraApp;