import React from 'react';
import PropTypes from 'prop-types'

function Student(props) {
    
    return (
        <div className="mainDiv">
            <h2>Name: {props.name}</h2>
            <h2>Age: {props.age}</h2>
            <h2>Student: {props.isStudent ? 'Yes' : 'No'}</h2>
        </div>
    );
}
Student.propTypes = {
    name: PropTypes.string,
    age: PropTypes.number,
    isStudent: PropTypes.bool,
}
export default Student