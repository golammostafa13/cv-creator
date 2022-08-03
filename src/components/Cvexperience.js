import React from 'react';
import { lastStyle, pStyle } from '../styles/styles';

const Cvexperience = (props) => {
    const {position, company, city, from, to} = props.experience;
    return (
        <div className="cv-inner-info">
            <p style={pStyle}>Company: <span className="last" style={lastStyle}> {company}</span></p>
            <p style={pStyle}>Position: <span className="last" style={lastStyle}> {position}</span></p>
            <p style={pStyle}>City: <span className="last" style={lastStyle}> {city}</span></p>
            <p style={pStyle}>From-To: <span className="last" style={lastStyle}> {from}-{to}</span></p>
        </div>
    );
};

export default Cvexperience;