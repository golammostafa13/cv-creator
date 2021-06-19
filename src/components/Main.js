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
            experience: {
                position: '',
                company: '',
                city: '',
                from: '',
                to: '',
            },
            skills: {
                skill1: '',
                skill2: '',
                skill3: '',
            },
            personalProfile: {
                father: '',
                dateOfBirth: '',
                gender: '',
                maritalStatus: '',
                languages: '',
                nationality: '',
            }
        }
    }
    handleChange = (e) =>{
        const className = e.target.className;
        const key = e.target.name;
        const value = e.target.value;
        // const key = property[e.target.name]
        // console.log(property);
        if(className === 'personal'){
            if(e.target.type==='file'){
                console.log(e.target.files[0])
            }
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
    handleBtn = () =>{
        alert('Sorry! "Add More" Under Construction')
    }
    render() {
        const {personal, educational, experience, skills, personalProfile} = this.state;
        return (
            <div className="main">
                <PersonalInfo personal={personal} handleChange={this.handleChange}></PersonalInfo>
                <Experience experience={experience} handleChange={this.handleChange} handleBtn={this.handleBtn}></Experience>
                <Education educational={educational} handleChange={this.handleChange} handleBtn={this.handleBtn}></Education>
                <Skills handleChange={this.handleChange} skills={skills} handleBtn={this.handleBtn}></Skills>
                <PersonalProfile personalProfile={personalProfile} handleChange={this.handleChange} handleBtn={this.handleBtn}></PersonalProfile>
                <Cv state={this.state}></Cv>
            </div>
        );
    }
}

export default Main;