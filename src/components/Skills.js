import React from 'react';
import SingleSkills from './SingleSkills';

const Skills = (props) => {
    const {skillsTasks, handleSubmit, handleChange, skills} = props;
    return (
        <>
            <h2>Skills</h2>
            
            {
                skillsTasks.map(skill => 
                    <SingleSkills
                        key={Math.random()}
                        skills={skill}
                        handleSubmit={handleSubmit}
                        handleChange={handleChange}
                        isBtnShow={false}>
                    </SingleSkills>)
            }
            <SingleSkills
                skills={skills}
                handleSubmit={handleSubmit}
                handleChange={handleChange}
                isBtnShow={true}>
            </SingleSkills>
        </>        
    )
};

export default Skills;