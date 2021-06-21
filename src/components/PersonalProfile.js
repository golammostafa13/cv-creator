import React from 'react';

const PersonalProfile = (props) => {
    const {handleChange} = props;
    const {father, dateOfBirth, gender, maritalStatus, languages, nationality} = props.personalProfile;
    return (
        <div className="form-info">
            <h2>Personal Profile Information</h2>
            <form>
                <input type="text" className="personalProfile" placeholder="Father's Name" value={father} onChange={handleChange} name="father"></input>
                <input type="text" className="personalProfile" placeholder="Date Of Birth" value={dateOfBirth} onChange={handleChange} name="dateOfBirth"></input>
                <input type="text" className="personalProfile" placeholder="Gender" value={gender} onChange={handleChange} name="gender"></input>
                <input type="text" className="personalProfile" placeholder="Marital Status" value={maritalStatus} onChange={handleChange} name="maritalStatus"></input>
                <input type="text" className="personalProfile" placeholder="Languages Known" value={languages} onChange={handleChange} name="languages"></input>
                <input type="text" className="personalProfile" placeholder="Nationality" value={nationality} onChange={handleChange} name="nationality"></input>
            </form>
        </div>
    );
};

export default PersonalProfile;