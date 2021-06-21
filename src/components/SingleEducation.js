import React from 'react';

const SingleEducation = (props) => {
    // console.log(props.SingleEducation);
    const {handleChange,  handleSubmit, educational} = props;
    const {universityName, degree, city, subject, from, to} = educational;
    return (
        <div className="form-info">
            <form className="educationalTasks" onSubmit={handleSubmit}>
                <input type="text" className="educational" placeholder="University Name" value={universityName} onChange={handleChange} name="universityName"></input>
                <input type="text" className="educational" placeholder="Degree" value={degree} onChange={handleChange} name="degree"></input>
                <input type="text" className="educational" placeholder="City" value={city} onChange={handleChange} name="city"></input>
                <input type="text" className="educational" placeholder="Subject" value={subject} onChange={handleChange} name="subject"></input>
                <input type="text" className="educational" placeholder="From" value={from} onChange={handleChange} name="from"></input>
                <input type="text" className="educational" placeholder="To" value={to} onChange={handleChange} name="to"></input>
                <button type="submit">Add More</button>
            </form>
        </div>
    );
};

export default SingleEducation;