import React from 'react';

const SingleExperience = (props) => {
    const {handleChange, experience, handleSubmit, addMoreBtn} = props;
    const {position, company, city, from, to} = experience;
    return (
        <div className="form-info">
            <form className="experienceTasks" onSubmit={handleSubmit}>
                <input type="text" className="experience" placeholder="Position" value={position} onChange={handleChange} name="position"></input>
                <input type="text" className="experience" placeholder="Company" value={company} onChange={handleChange} name="company"></input>
                <input type="text" className="experience" placeholder="City" value={city} onChange={handleChange} name="city"></input>
                <input type="text" className="experience" placeholder="From" value={from} onChange={handleChange} name="from"></input>
                <input type="text" className="experience" placeholder="To" value={to} onChange={handleChange} name="to"></input>
                {addMoreBtn && <button type="submit">Add More</button>}
            </form>
        </div>
    );
};

export default SingleExperience;