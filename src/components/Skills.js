import React from 'react';

const Skills = (props) => {
    const {handleChange} = props;
    const {skill1, skill2, skill3} = props.skills;
    return (
        <div className="form-info">
            <h2>Personal Skills</h2>
            <form>
                <input type="text" className="skills" placeholder="skill-1" value={skill1} onChange={handleChange} name="skill1"></input>
                <input type="text" className="skills" placeholder="skill-2" value={skill2} onChange={handleChange} name="skill2"></input>
                <input type="text" className="skills" placeholder="skill-3" value={skill3} onChange={handleChange} name="skill3"></input>
            </form>
            <button onClick={props.handleBtn}>Add More</button>
        </div>
    );
};

export default Skills;