import React, { Component } from 'react';
import Cv from './Cv';
import Education from './Education';
import Experience from './Experience';
import PersonalInfo from './PersonalInfo';
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
        }
    }
    render() {
        const {personal, educational, experience} = this.state;
        return (
            <div className="main">
                <PersonalInfo personal={personal} handleChange={this.handleChange}></PersonalInfo>
                <Experience experience={experience} handleChange={this.handleChange}></Experience>
                <Education educational={educational} handleChange={this.handleChange}></Education>
                <Cv state={this.state}></Cv>
            </div>
        );
    }
}

export default Main;