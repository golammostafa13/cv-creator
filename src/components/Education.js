import React from 'react';
import SingleEducation from './SingleEducation';

const Education = (props) => {
    const {educationalTasks, handleSubmit, handleChange, education} = props;
    return (
        <>
            <h2>Educational Information</h2>
            <SingleEducation
                educational={education}
                handleSubmit={handleSubmit}
                handleChange={handleChange}>
            </SingleEducation>
            {
                educationalTasks.map(edu => 
                    <SingleEducation
                        key={Math.random()}
                        educational={edu}
                        handleSubmit={handleSubmit}
                        handleChange={handleChange}>
                    </SingleEducation>)
            }
        </>        
    )
};

export default Education;