import React from 'react';

const Cveducational = (props) => {
    const {universityName, subject, degree} = props.educational;
    return (
        <div className="cv-inner-info">
            <p>Institute: <span className="last"> {universityName}</span></p>
            <p>Department: <span className="last"> {subject}</span></p>
            <p>Degree: <span className="last"> {degree}</span></p>
            <p>Session: <span className="last"> {props.educational.from}-{props.educational.to}</span></p>
            <p>City: <span className="last"> {props.educational.city}</span></p>
        </div>
    );
};

export default Cveducational;