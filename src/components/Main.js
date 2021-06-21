import React, { Component } from 'react';
import Cv from './Cv';
import Education from './Education';
import Experience from './Experience';
import PersonalInfo from './PersonalInfo';
import PersonalProfile from './PersonalProfile';
import Skills from './Skills';
class Main extends Component {
    constructor(){
        super();
        this.state = {
            personal: {
                firstName: '',
                lastName: '',
                title: '',
                photo: '',
                address: '',
                phoneNumber: '',
                email: '',
                description: '',
            },
            educational: {
                universityName: '',
                city: '',
                degree: '',
                subject: '',
                from: '',
                to: '',
            },
            educationalTasks: [],
            experience: {
                position: '',
                company: '',
                city: '',
                from: '',
                to: '',
            },
            experienceTasks: [],
            skills: {
                skill: '',
            },
            skillsTasks: [],
            personalProfile: {
                father: '',
                dateOfBirth: '',
                gender: '',
                maritalStatus: '',
                languages: '',
                nationality: '',
            },
        }
    }
    handleSubmit = (e) => {
        e.preventDefault();
        const objectKey = e.target.className;
        if(objectKey === 'skillsTasks'){
            this.setState(prevState => ({
                skillsTasks: prevState.skillsTasks.concat(prevState.skills),
                skills: {
                    skill: '',
                },
            }))
        }else if(objectKey === 'educationalTasks'){
            this.setState(prevState => ({
                educationalTasks: prevState.educationalTasks.concat(prevState.educational),
                educational: {
                    universityName: '',
                    city: '',
                    degree: '',
                    subject: '',
                    from: '',
                    to: '',
                },
            }))
        }else if(objectKey === 'experienceTasks'){
            this.setState(prevState => ({
                experienceTasks: prevState.experienceTasks.concat(prevState.experience),
                experience: {
                    position: '',
                    company: '',
                    city: '',
                    from: '',
                    to: '',
                },
            }))
        }
    }
    handleChange = (e) =>{
        e.preventDefault()
        const className = e.target.className;
        const key = e.target.name;
        const value = e.target.value;
        // console.log(value);
        if(className === 'personal'){
            this.setState((prevState) => ({
                ...prevState,
                personal: {...prevState.personal, [key]:value}
            }))
        }else if(className === 'experience'){
            this.setState(prevState =>({
                ...prevState,
                experience: {...prevState.experience, [key]: value}
            }))
        }else if(className === 'educational'){
            this.setState(prevState =>({
                ...prevState,
                educational: {...prevState.educational,[key]: value},
            }))
        }else if(className === 'skills'){
            this.setState(prevState =>({
                ...prevState,
                skills: {...prevState.skills, [key]: value},
            }))
        }else if(className === 'personalProfile'){
            this.setState(prevState =>({
                ...prevState,
                personalProfile: {...prevState.personalProfile, [key]: value},
            }))
        }
    }
    render() {
        const {personal, educationalTasks, experienceTasks, skillsTasks, educational, experience, skills, personalProfile} = this.state;
        return (
            <div className="main">
                <PersonalInfo 
                    personal={personal} 
                    handleChange={this.handleChange}>
                </PersonalInfo>

                <Experience 
                    experienceTasks={experienceTasks} 
                    handleChange={this.handleChange} 
                    handleSubmit={this.handleSubmit}
                    experience={experience}>
                </Experience>

                <Education 
                    educationalTasks={educationalTasks}
                    handleChange={this.handleChange} 
                    handleSubmit={this.handleSubmit} 
                    education={educational}>
                </Education>

                <Skills 
                    handleChange={this.handleChange} 
                    skillsTasks={skillsTasks} 
                    handleSubmit={this.handleSubmit}
                    skills={skills}>
                </Skills>

                <PersonalProfile 
                    personalProfile={personalProfile} 
                    handleChange={this.handleChange}>
                </PersonalProfile>

                <Cv state={this.state}></Cv>
            </div>
        );
    }
}

export default Main;