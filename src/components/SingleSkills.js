import React from 'react';

const SingleSkills = (props) => {
    const {handleChange, handleSubmit, skills} = props;
    const {skill} = skills;
    return (
        <div className="form-info">
            <form className="skillsTasks" onSubmit={handleSubmit}>
                <input type="text" className="skills" placeholder="skill-name" value={skill} onChange={handleChange} name="skill"></input>
                <button type="submit">Add More</button>
            </form>
        </div>
    );
};

export default SingleSkills;