import React from 'react';

const Cvexperience = (props) => {
    const {position, company, city, from, to} = props.experience;
    return (
        <div className="cv-inner-info">
            <p>Company: <span className="last"> {company}</span></p>
            <p>Position: <span className="last"> {position}</span></p>
            <p>City: <span className="last"> {city}</span></p>
            <p>From-To: <span className="last"> {from}-{to}</span></p>
        </div>
    );
};

export default Cvexperience;