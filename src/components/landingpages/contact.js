import React, { useState } from 'react'
import '../css-components/contact.css'
import contactBanner from '../images/contact-banner.jpg'
import { FaCog } from "react-icons/fa";
import {FaAddressBook} from 'react-icons/fa'
import {FaPhoneAlt} from 'react-icons/fa'

function Contact() {
    // Rotation
    const [cogStatus, setCogStatus] = useState(false)
    const [cog1, setCog1] = useState('paused')
    const [cog2, setCog2] = useState('paused')
    const [cog3, setCog3] = useState('paused')
    const [cog4, setCog4] = useState('paused')
    const [cog5, setCog5] = useState('paused')
    //Color
    const [cog1Color, setCog1Color] = useState('#FFB406')
    const [cog2Color, setCog2Color] = useState('#FFB406')
    const [cog3Color, setCog3Color] = useState('#FFB406')
    const [cog4Color, setCog4Color] = useState('#FFB406')
    const [cog5Color, setCog5Color] = useState('#FFB406')
    // input Values
    const [nameVal, setNameVal] = useState(null)
    const [emailVal, setEmailVal] = useState(null)
    const [phoneVal, setPhoneVal] = useState(null)
    const [subjectVal, setSubjectVal] = useState(null)
    const [msgVal, setMsgVal] = useState(null)
    // Input validation
    const [nameValidate, setNameValidate] = useState(false)
    const [emailValidate, setEmailValidate] = useState(false)
    const [phoneValidate, setPhoneValidate] = useState(false)
    const [subjectValidate, setSubjectValidate] = useState(false)
    const [msgValidate, setMsgValidate] = useState(false)
    
    // COGS
    function spinCog1(params) {
        if (cogStatus === false) {
            setCog1('running')
            setCogStatus(true)
        } else if (cogStatus === true) {
            setCog1('paused')
            setCogStatus(false)
        }
    }
    function spinCog2(params) {
        if (cogStatus === false) {
            setCog2('running')
            setCogStatus(true)
        } else if (cogStatus === true) {
            setCog2('paused')
            setCogStatus(false)
        }
    }
    function spinCog3(params) {
        if (cogStatus === false) {
            setCog3('running')
            setCogStatus(true)
        } else if (cogStatus === true) {
            setCog3('paused')
            setCogStatus(false)
        }
    }
    function spinCog4(params) {
        if (cogStatus === false) {
            setCog4('running')
            setCogStatus(true)
        } else if (cogStatus === true) {
            setCog4('paused')
            setCogStatus(false)
        }
    }
    function spinCog5(params) {
        if (cogStatus === false) {
            setCog5('running')
            setCogStatus(true)
        } else if (cogStatus === true) {
            setCog5('paused')
            setCogStatus(false)
        }
    }
    // FORMS
    function submitForm(e) {
        // console.log(nameVal);
        // console.log(emailVal);
        // console.log(phoneVal);
        // console.log(subjectVal);
        // console.log(msgVal);      

        if (nameVal === null|| nameVal <= 3 || nameVal === '') {
            setCog1Color('#8B0000')
            setNameValidate(false)
        } else {
            setCog1Color('#FFB406')
            setNameValidate(true)
        }
        if (emailVal === null || emailVal <= 4 || emailVal === '') {
            setCog2Color('#8B0000')
            setEmailValidate(false)
        } else{
            setCog2Color('#FFB406')
            setEmailValidate(true)
        }
        if (phoneVal === null || phoneVal < 9 || phoneVal === ''|| phoneVal == NaN) {
            setCog3Color('#8B0000')
            setPhoneValidate(false)
        } else{
            setCog3Color('#FFB406')
            setPhoneValidate(true)
        }
        if (subjectVal === null || subjectVal <= 3|| subjectVal === '') {
            setCog4Color('#8B0000')
            setSubjectValidate(false)
        } else {
            setCog4Color('#FFB406')
            setSubjectValidate(true)
        }
        if (msgVal === null || msgVal === '' || msgVal <= 10) {
            setCog5Color('#8B0000')
            setMsgValidate(false)
        } else{
            setCog5Color('#FFB406')
            setMsgValidate(true)
        }
        console.log('Works!');
    }
    function sendForm(e) {
        e.preventDefault()
        if (nameValidate == true && emailValidate == true && phoneValidate == true  && subjectValidate == true && msgValidate == true) {
            console.log('submitted!');
        } else {
            console.log('not submitted!');
        }
    }
    function getName(val) {    
        setNameVal(val.target.value)
    }
    function getEmail(val) {
        setEmailVal(val.target.value)
    }
    function getPhone(val) {
        setPhoneVal(val.target.value)
    }
    function getSubject(val) {
        setSubjectVal(val.target.value)
    }
    function getMessage(val) {
        setMsgVal(val.target.value)
    }

  
    return (
        <div className='contact-body'>
            <div className="contact-des">
                <h1>Contact</h1>
                <h4>
                    For more information, to schedule demos, 
                    or to inquire about employment please contact us below
                </h4>
            </div>
            <img src={contactBanner} alt=""/>
            <div className="contact-info">
                <h1>Contact Info</h1>
                <div>
                    <FaAddressBook></FaAddressBook>
                    Address: 302 Brandon Drive, Clayton, North Carolina
                </div>
                <div>
                    <FaPhoneAlt></FaPhoneAlt>
                    Telephone: (984)-444-9039
                </div>
            </div>
            <div className="message">
                <form action="">
                    <div id='error-msg'></div>
                    <div id='desc-container'>
                        <FaCog 
                            className='cog'
                            id='cog-name'
                            style={{
                                animationPlayState: cog1,
                                color: cog1Color
                            }}
                        ></FaCog>
                        <div id='desc' >Name:</div>
                        <input 
                            type="text" 
                            name='name'
                            onFocus={spinCog1}
                            onBlur={spinCog1}
                            onChange={getName}
                        />
                    </div>
                    <div id='desc-container'>
                        <FaCog 
                            className='cog'
                            id='cog-email'
                            style={{
                                animationPlayState: cog2,
                                color: cog2Color
                            }}
                        ></FaCog>
                        <div id='desc'>Email:</div>
                        <input type="text"
                            name='email'
                            onFocus={spinCog2}
                            onBlur={spinCog2}
                            onChange={getEmail}
                        />
                    </div>
                    <div id='desc-container'>
                        <FaCog 
                            className='cog'
                            id='cog-phone'
                            style={{
                                animationPlayState: cog3,
                                color: cog3Color
                            }}
                        ></FaCog>
                        <div id='desc'>Phone:</div>
                        <input 
                            type="text"
                            name='phone'
                            onFocus={spinCog3}
                            onBlur={spinCog3}
                            onChange={getPhone}
                        />
                    </div>
                    <div id='desc-container'>
                        <FaCog 
                            className='cog'
                            id='cog-phone'
                            style={{
                                animationPlayState: cog4,
                                color: cog4Color
                            }}
                        ></FaCog>
                        <div id='desc'>Subject:</div>
                        <input 
                            type="text"
                            onFocus={spinCog4}
                            onBlur={spinCog4}
                            onChange={getSubject}
                        />
                    </div>
                    <div>      
                        <div id='desc-container-msg'>
                            
                            <div >
                                <FaCog 
                                    className='cog'
                                    id='cog-msg'
                                    style={{
                                        animationPlayState: cog5,
                                        color: cog5Color
                                    }}
                                ></FaCog>
                                <div id='msg'>
                                    Message:
                                </div>
                                                        </div>
                            <textarea 
                                name="" id="" cols="38" rows="7" 
                                onFocus={spinCog5}
                                onBlur={spinCog5}
                                onChange={getMessage}
                            ></textarea> 
                        </div> 
                        
                    </div>
                    <button onClick={sendForm} onMouseEnter={submitForm}>Submit</button>
                </form>
            </div>
        </div>
    )
}

export default Contact
