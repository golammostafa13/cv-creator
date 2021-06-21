import React from 'react';
import SingleSkills from './SingleSkills';

const Skills = (props) => {
    const {skillsTasks, handleSubmit, handleChange, skills} = props;
    return (
        <>
            <h2>Skills</h2>
            <SingleSkills
                skills={skills}
                handleSubmit={handleSubmit}
                handleChange={handleChange}>
            </SingleSkills>
            {
                skillsTasks.map(skill => 
                    <SingleSkills
                        key={Math.random()}
                        skills={skill}
                        handleSubmit={handleSubmit}
                        handleChange={handleChange}>
                    </SingleSkills>)
            }
        </>        
    )
};

export default Skills;