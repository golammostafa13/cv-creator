import { makePDF } from 'multi-page-html2pdf';
import React from 'react';
import CVeducational from './Cveducational';
import CVexperience from './Cvexperience';
import CVskill from './Cvskills';
import photoDevice from './images/logo.svg';

const Cv = (props) => {
    const {experienceTasks, experience, educationalTasks, educational, skillsTasks, skills, personal, personalProfile} = props;

    let {firstName, lastName, photo: photoURL, title, description, email, phoneNumber, address} = personal;

    const {father, dateOfBirth, gender, maritalStatus, languages, nationality} = personalProfile;


    // let element = document.querySelector('#main-cv');

    const handleClick = () => {
       makePDF('main');
    //    console.log(pdf);
    }
    return (
        <>
        <div id="main" className="cv-container">
           <header className="cv-header">
                <div>
                    <h1>{firstName} {lastName}</h1>
                    <p>{title}</p>
                    <p>Add: <span className="last"> {address}</span></p>
                    <p>Mobile No: <span className="last"> {phoneNumber}</span></p>
                    <p>Email: <span className="last"> {email}</span></p>
                </div>
                <div className="img">
                    <img src={photoURL || photoDevice} alt="avatar" />
                </div>
            </header>
            <section className="cv-description">
                <h1>DESCRIPTION</h1>
                <p>{description}</p>
            </section>
            <section className="cv-academic">
                <h1>ACADEMIC QUALIFICATION</h1>
                <CVeducational 
                    educational={educational}>
                </CVeducational>
                {
                    educationalTasks.map(edu => 
                        <CVeducational 
                            key={Math.random()}
                            educational={edu}>
                        </CVeducational>)
                }
            </section> 
            <section className='cv-experience'>
                <h1>EXPERIENCE</h1>
                <CVexperience
                    experience={experience}>
                </CVexperience>
                {
                    experienceTasks.map(ex =>
                        <CVexperience
                            key={Math.random()}
                            experience={ex}>
                        </CVexperience>)
                }
            </section>
            <section className="cv-skill">
                <h1>PERSONAL SKILLS</h1>
                <CVskill
                    skills={skills}>
                </CVskill>
                {
                    skillsTasks.map(sk =>
                        <CVskill
                            key={Math.random()}
                            skills={sk}>
                        </CVskill>)
                }
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
                <p>Place: <strong className="signature">(Signature)</strong></p>
            </section>  
        </div>
        <button onClick={handleClick}>Download(PDF)</button>
        </>
    );
};
export default Cv;