import React from 'react';

const PersonalInfo = (props) => {
    const {handleChange, personal} = props;
    const {firstName, lastName, email, title, address, phone, message} = personal;
    return (
        <div className="form-info">
            <h2>Personal Information</h2>
            <form>
                <input className="personal" type="text" placeholder="First name" value={firstName} onChange={handleChange} name="firstName"></input>

                <input className="personal" type="text" placeholder="Last name" value={lastName} onChange={handleChange} name="lastName"></input>

                <input className="personal" type="text" placeholder="Title" value={title} onChange={handleChange} name="title"></input>

                <label id="file-label" htmlFor="file">Select Image</label>
                <input id="file" style={{display: 'none',visibility: 'hidden'}} className="personal" type="file" name="photo"></input>
                
                <input className="personal" type="text" placeholder="Addess" value={address} onChange={handleChange} name="address"></input>

                <input className="personal" type="number" placeholder="Phone number" value={phone} onChange={handleChange} name="phoneNumber"></input>

                <input className="personal" type="email" placeholder="Email" value={email} onChange={handleChange} name="email"></input>

                <input className="personal" type="message" placeholder="Description" value={message} onChange={handleChange} name="description"></input>
            </form>
        </div>
    );
};

export default PersonalInfo;