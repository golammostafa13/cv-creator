import React from 'react';
import SingleEducation from './SingleEducation';

const Education = (props) => {
    const {educationalTasks, handleSubmit, handleChange, education} = props;
    return (
        <>
            <h2>Educational Information</h2>
            
            {
                educationalTasks.map(edu => 
                    <SingleEducation
                        key={Math.random()}
                        educational={edu}
                        handleSubmit={handleSubmit}
                        handleChange={handleChange}
                        isBtnShow={false}>
                    </SingleEducation>)
            }
            <SingleEducation
                educational={education}
                handleSubmit={handleSubmit}
                handleChange={handleChange}
                isBtnShow={true}>
            </SingleEducation>
        </>        
    )
};

export default Education;