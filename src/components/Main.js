import React, { useState } from 'react';
import Cv from './Cv';
import Education from './Education';
import Experience from './Experience';
import PersonalInfo from './PersonalInfo';
import PersonalProfile from './PersonalProfile';
import Skills from './Skills';
const Main = () => {
    const [personal, setPersonal] = useState({
        firstName: '',
        lastName: '',
        title: '',
        photo: '',
        address: '',
        phoneNumber: '',
        email: '',
        description: '',
    });
    const [skills, setSkills] = useState({
        skill: '',
    })
    const [educational, setEducational] = useState({
        universityName: '',
        city: '',
        degree: '',
        subject: '',
        from: '',
        to: '',
    })
    const [experience, setExperience] = useState({
        position: '',
        company: '',
        city: '',
        from: '',
        to: '',
    })
    const [personalProfile, setPersonalProfile] = useState({
        father: '',
        dateOfBirth: '',
        gender: '',
        maritalStatus: '',
        languages: '',
        nationality: '',
    })

    const [educationalTasks, setEducationalTasks] = useState([]);
    const [skillsTasks, setSkillTasks] = useState([]);
    const [experienceTasks, setExperienceTasks] = useState([]);
    const handleSubmit = (e) => {
        e.preventDefault();
        const objectKey = e.target.className;
        if(objectKey === 'skillsTasks'){
            setSkillTasks(prevState => prevState.concat(skills))
            setSkills({skill: ''});

            // setState(prevState => ({
            //     skillsTasks: prevState.skillsTasks.concat(prevState.skills),
            // }))
        }else if(objectKey === 'educationalTasks'){
            setEducationalTasks(prevState => prevState.concat(educational));
            setEducational({
                universityName: '',
                city: '',
                degree: '',
                subject: '',
                from: '',
                to: '',
            });
            // setState(prevState => ({
            //     educationalTasks: prevState.educationalTasks.concat(prevState.educational),
            //     educational: {
            //         universityName: '',
            //         city: '',
            //         degree: '',
            //         subject: '',
            //         from: '',
            //         to: '',
            //     },
            // }))
        }else if(objectKey === 'experienceTasks'){
            setExperienceTasks(prevState => prevState.concat(experience));
            setExperience({
                position: '',
                company: '',
                city: '',
                from: '',
                to: '',
            });
            // setState(prevState => ({
            //     experienceTasks: prevState.experienceTasks.concat(prevState.experience),
            //     experience: {
            //         position: '',
            //         company: '',
            //         city: '',
            //         from: '',
            //         to: '',
            //     },
            // }))
        }
    }
    const handleChange = (e) =>{
        e.preventDefault()
        const className = e.target.className;
        const key = e.target.name;
        const value = e.target.value;

        // console.log(file);
        // console.log(file.name);
        // console.log(key);
        if(className === 'personal'){
            if(key==='photo'){
                const file = e.target.files[0];
                const reader = new FileReader();
                reader.onload = () => {
                    setPersonal(prevState => {
                        return {...prevState, photo: reader.result}
                    })
                    // setState((prevState) => ({
                    //     ...prevState,
                    //     personal: {
                    //     ...prevState.personalInfo,
                    //     photo: reader.result,
                    //     },
                    // }));
                };
                reader.readAsDataURL(file);
            }
            else {
                setPersonal(prevState => {
                    return {...prevState, [key]: value}
                })
            }
            // else setState((prevState) => ({
            //     ...prevState,
            //     personal: {...prevState.personal, [key]:value}
            // }))
        }else if(className === 'experience'){
            setExperience(prevState => {
                return {...prevState, [key]: value}
            })
            // setState(prevState =>({
            //     ...prevState,
            //     experience: {...prevState.experience, [key]: value}
            // }))
        }else if(className === 'educational'){
            setEducational(prevState => {
                return {...prevState, [key]: value}
            })
            // setState(prevState =>({
            //     ...prevState,
            //     educational: {...prevState.educational,[key]: value},
            // }))
        }else if(className === 'skills'){
            setSkills(prevState => {
                return {...prevState, [key]: value}
            })
            // setState(prevState =>({
            //     ...prevState,
            //     skills: {...prevState.skills, [key]: value},
            // }))
        }else if(className === 'personalProfile'){
            setPersonalProfile(prevState => {
                return {...prevState, [key]: value}
            })
            // setState(prevState =>({
            //     ...prevState,
            //     personalProfile: {...prevState.personalProfile, [key]: value},
            // }))
        }
    }
    return (
        <div className="main">
            <PersonalInfo 
                personal={personal} 
                handleChange={handleChange}>
            </PersonalInfo>

            <Experience 
                experienceTasks={experienceTasks} 
                handleChange={handleChange} 
                handleSubmit={handleSubmit}
                experience={experience}>
            </Experience>

            <Education 
                educationalTasks={educationalTasks}
                handleChange={handleChange} 
                handleSubmit={handleSubmit} 
                education={educational}>
            </Education>

            <Skills 
                handleChange={handleChange} 
                skillsTasks={skillsTasks} 
                handleSubmit={handleSubmit}
                skills={skills}>
            </Skills>

            <PersonalProfile 
                personalProfile={personalProfile} 
                handleChange={handleChange}>
            </PersonalProfile>

            <Cv 
                personal={personal}
                experience={experience}
                skills={skills}
                educational={educational}
                personalProfile={personalProfile}

                experienceTasks={experienceTasks}
                skillsTasks={skillsTasks}
                educationalTasks={educationalTasks}>
            </Cv>
        </div>
    );
}

export default Main;