import React from 'react';
import { lastStyle, pStyle } from '../styles/styles';

const Cveducational = (props) => {
    const {universityName, subject, degree} = props.educational;
    return (
        <div className="cv-inner-info">
            <p style={pStyle}>Institute: <span className="last" style={lastStyle}> {universityName}</span></p>
            <p style={pStyle}>Department: <span className="last" style={lastStyle}> {subject}</span></p>
            <p style={pStyle}>Degree: <span className="last" style={lastStyle}> {degree}</span></p>
            <p style={pStyle}>Session: <span className="last" style={lastStyle}> {props.educational.from}-{props.educational.to}</span></p>
            <p style={pStyle}>City: <span className="last" style={lastStyle}> {props.educational.city}</span></p>
        </div>
    );
};

export default Cveducational;