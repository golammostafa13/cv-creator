import React from 'react';

const Cv = (props) => {
    const {firstName, lastName, title, description, email, phoneNumber, address} = props.state.personal;
    const {position, company, city, from, to} = props.state.experience;

    const {universityName, subject, degree} = props.state.educational;

    const {skill1, skill2, skill3} = props.state.skills;

    const {father, dateOfBirth, gender, maritalStatus, languages, nationality} = props.state.personalProfile;
    
    return (
        <div className="cv-container">
            <header className="cv-header">
                <div>
                    <h1>{firstName} {lastName}</h1>
                    <p>{title}</p>
                    <p>Add: <span className="last"> {address}</span></p>
                    <p>Mobile No: <span className="last"> {phoneNumber}</span></p>
                    <p>Email: <span className="last"> {email}</span></p>
                </div>
                <div className="img">
                    <img src='https://cdn.iconscout.com/icon/free/png-256/avatar-367-456319.png' alt="avatar" />
                </div>
            </header>
            <section className="cv-description">
                <h1>DESCRIPTION</h1>
                <p>{description}</p>
            </section>
            <section className="cv-academic">
                <h1>ACADEMIC QUALIFICATION</h1>
                <div>
                    <p>Institute: <span className="last"> {universityName}</span></p>
                    <p>Department: <span className="last"> {subject}</span></p>
                    <p>Degree: <span className="last"> {degree}</span></p>
                    <p>Session: <span className="last"> {props.state.educational.from}-{props.state.educational.to}</span></p>
                    <p>City: <span className="last"> {props.state.educational.city}</span></p>
                </div>
            </section> 
            <section className='cv-experience'>
                <h1>EXPERIENCE</h1>
                <div>
                    <p>Company: <span className="last"> {company}</span></p>
                    <p>Position: <span className="last"> {position}</span></p>
                    <p>City: <span className="last"> {city}</span></p>
                    <p>From-To: <span className="last"> {from}-{to}</span></p>
                </div>
            </section>
            <section className="cv-skill">
                <h1>PERSONAL SKILL</h1>
                <div>
                    <li>{skill1}</li>
                    <li>{skill2}</li>
                    <li>{skill3}</li>
                </div>
            </section>  
            <section className="cv-personal">
                <h1>PERSONAL PROFILE</h1>
                <div>
                    <p>Father's Name: <span className="last"> {father}</span></p>
                    <p>Date Of Birth: <span className="last"> {dateOfBirth}</span></p>
                    <p>Gender: <span className="last"> {gender}</span></p>
                    <p>Marital Status: <span className="last"> {maritalStatus}</span></p>
                    <p>Languages Known: <span className="last"> {languages}</span></p>
                    <p>Nationality: <span className="last"> {nationality}</span></p>
                </div>
            </section>   
            <section>
                <h1>DECLARATION</h1>
                <p>I solemnly declare that all the above information is correct to the best of my knowledge and belief.</p>
                <br></br>
                <p>Date:</p>
                <p>Place: <span className="signature">(Signature)</span></p>
            </section>     
        </div>
    );
};

export default Cv;