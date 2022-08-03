import React from 'react';
import { cvInnerInfo, skillStyle } from '../styles/styles';

const Cvskills = (props) => {
    const {skill} = props.skills;
    
    return (
        <div className="cv-inner-info" style={cvInnerInfo}>
            <li style={skillStyle}>{skill}</li>
        </div>
    );
};

export default Cvskills;