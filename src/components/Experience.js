import React from 'react';
import SingleExperience from './SingleExperience';
const Experience = (props) => {
    const {experienceTasks, handleSubmit, handleChange, experience} = props;
    return (
        <>
            <h2>Experience</h2>
            
            {
                experienceTasks.map(ex => 
                    <SingleExperience 
                        key={Math.random()}
                        experience={ex}
                        handleSubmit={handleSubmit}
                        handleChange={handleChange}
                        isBtnShow={false}>
                    </SingleExperience>)
            }
            <SingleExperience 
                experience={experience}
                handleSubmit={handleSubmit}
                handleChange={handleChange}
                isBtnShow={true}>
            </SingleExperience>
        </>        
    )
};

export default Experience;