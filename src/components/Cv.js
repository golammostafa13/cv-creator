// import html2canvas from 'html2canvas';
// import { jsPDF } from 'jspdf';
import React from 'react';
import { containerStyle, h1Style, headerStyle, imgStyle, lastStyle, pStyle, sectionStyle, signatureSytle } from '../styles/styles';
import CVeducational from './Cveducational';
import CVexperience from './Cvexperience';
import CVskill from './Cvskills';
import photoDevice from './images/logo.svg';

const Cv = (props) => {
    const {experienceTasks, experience, educationalTasks, educational, skillsTasks, skills, personal, personalProfile} = props;

    let {firstName, lastName, photo: photoURL, title, description, email, phoneNumber, address} = personal;

    const {father, dateOfBirth, gender, maritalStatus, languages, nationality} = personalProfile;


    // let element = document.querySelector('#main-cv');
    // let content = document.getElementById("pdf");
    const handleClick = (e) => {
        // e.preventDefault();
        // window.html2canvas = html2canvas
        // var pdf = new jsPDF();
        // pdf.text(document.querySelector("#main"),{
        //     "width": 170,
        //     callback: function(pdf){
        //         pdf.save('cv.pdf');
        //         }
        //     }
        // );

        // pdf.text(document.querySelector("#pdf"))
        // pdf.save('test.pdf');
        // pdf.html(document.getElementById("main"),function() {
        //     pdf.save('web.pdf');
        // });
        var divContents = document.querySelector("#main");
        var printWindow = window.open('', '', 'height=600,width=900');
        printWindow.document.write('<html><head>');
        printWindow.document.write('<link rel="stylesheet" href="../../src/App.css" />');
        printWindow.document.write('<title>Cv Pdf</title></head><body >');
        printWindow.document.write(divContents.innerHTML);
        printWindow.document.write('</body></html>');
        printWindow.document.close();
        printWindow.print();
    }

    return (
        <>
            <div id="main" className="cv-container" style={containerStyle}>
            <header className="cv-header" style={headerStyle}>
                    <div>
                        <h1 style={h1Style}>{firstName} {lastName}</h1>
                        <p style={pStyle}>{title}</p>
                        <p style={pStyle}>Add: <span className="last" style={lastStyle}> {address}</span></p>
                        <p style={pStyle}>Mobile No: <span className="last" style={lastStyle}> {phoneNumber}</span></p>
                        <p style={pStyle}>Email: <span className="last" style={lastStyle}> {email}</span></p>
                    </div>
                    <div className="img" style={imgStyle}>
                        <img style={{width: '100%', heigth: '100%'}} src={photoURL || photoDevice} alt="avatar" />
                    </div>
                </header>
                <section className="cv-description" style={sectionStyle}>
                    <h1 style={h1Style}>DESCRIPTION</h1>
                    <p style={pStyle}>{description}</p>
                </section>
                <section className="cv-academic" style={sectionStyle}>
                    <h1 style={h1Style}>ACADEMIC QUALIFICATION</h1>
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
                <section className='cv-experience'style={sectionStyle}>
                    <h1 style={h1Style}>EXPERIENCE</h1>
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
                <section className="cv-skill" style={sectionStyle}>
                    <h1 style={h1Style}>PERSONAL SKILLS</h1>
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
                <section className="cv-personal" style={sectionStyle}>
                    <h1 style={h1Style}>PERSONAL PROFILE</h1>
                    <div>
                        <p style={pStyle}>Father's Name: <span className="last" style={lastStyle}> {father}</span></p>
                        <p style={pStyle}>Date Of Birth: <span className="last" style={lastStyle}> {dateOfBirth}</span></p>
                        <p style={pStyle}>Gender: <span className="last" style={lastStyle}> {gender}</span></p>
                        <p style={pStyle}>Marital Status: <span className="last" style={lastStyle}> {maritalStatus}</span></p>
                        <p style={pStyle}>Languages Known: <span className="last" style={lastStyle}> {languages}</span></p>
                        <p style={pStyle}>Nationality: <span className="last" style={lastStyle}> {nationality}</span></p>
                    </div>
                </section>   
                <section style={sectionStyle}>
                    <h1 style={h1Style}>DECLARATION</h1>
                    <p style={pStyle}>I solemnly declare that all the above information is correct to the best of my knowledge and belief.</p>
                    <br></br>
                    <p style={pStyle}>Date:</p>
                    <p style={pStyle}>Place: <strong className="signature" style={signatureSytle}>(Signature)</strong></p>
                </section>  
            </div>
            <button onClick={handleClick}>Download(PDF)</button>
        </>
    );
};
export default Cv;