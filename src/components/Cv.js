import React from 'react';

const Cv = (props) => {
    const {firstName, lastName, title, description, email, phone, address} = props.state.personal;
    const {position, company, city, from, to} = props.state.experience;
    const {universityName, subject, degree} = props.state.educational;
    return (
        <div className="cv-container">
            <header>
                <h1>{firstName} {lastName}</h1>
                <p>{title}</p>
            </header>
            <div className="info">
                <section className="two-info">
                    <h2>Description</h2>
                    <p><i>{description}</i></p>
                    <div>
                        <h2>Experience</h2>
                        <div>
                            <p>{position}</p>
                            <p>{company}</p>
                            <p>{city}</p>
                            <p>{from}</p>
                            <p>{to}</p>
                        </div>
                    </div>
                    <div>
                        <h2>Education</h2>
                        <div>
                            <p>{props.state.educational.from}-{props.state.educational.to}</p>
                            <p><span>Institute Name: </span>{universityName}</p>
                            <p><span>Subject       : </span>{subject}</p>
                            <p><span>Degree        : </span>{degree}</p>
                        </div>
                    </div>
                </section>
                <section className="personal-info">
                    <div><img alt="" src=""></img></div>
                    <h2>Personal Details</h2>
                    <div>
                        <p><span>Address:</span> {address}</p>
                        <p><span>Phone Number:</span> {phone}</p>
                        <p><span>Email:</span> {email}</p>
                    </div>
                </section>
            </div>
        </div>
    );
};

export default Cv;