import React from 'react';

const Cvskills = (props) => {
    const {skill} = props.skills;
    
    return (
        <div className="cv-inner-info">
            <li style={{listStyleType: 'none'}}>{skill}</li>
        </div>
    );
};

export default Cvskills;