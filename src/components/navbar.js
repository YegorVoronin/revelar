import React, {useState} from 'react'
import Logo from './logo.js'
import { FaLinkedin,FaFacebookSquare,FaTwitterSquare } from "react-icons/fa";
import {Link} from 'react-router-dom'


function Navbar() {
    const [navStatus, setNavStatus] = useState(false)
    const [width, setWidth] = useState('0%')
    const [lineRotation1, setLineRotation1] = useState('rotate(0deg)')
    const [lineRotation3, setLineRotation3] = useState('rotate(0deg)')
    const [lineTop, setlineTop] = useState('0px')
    const [lineBottom, setlineBottom] = useState('0px')
    const [line2Opacity, setLine2Opacity] = useState('1')

    function toggleNav(params) {
        if (navStatus === false) {
            setWidth('100%')
            setLineRotation1('rotate(45deg)')
            setLineRotation3('rotate(135deg)')
            setLine2Opacity('0')
            setlineTop('12px')
            setlineBottom('-12px')
            setNavStatus(true)
        } else if (navStatus === true) {
            setWidth('0%')
            setLineRotation1('rotate(0deg)')
            setLineRotation3('rotate(0deg)')
            setlineTop('0px')
            setlineBottom('0px')
            setLine2Opacity('1')
            setNavStatus(false)   
        }
    }
    function scrollUp(params) {
        window.scrollTo(0, 0)
        toggleNav()
    }
    function goLinkedIn(params) {
        window.open("https://www.linkedin.com");
    }
    function goFacebook(params) {
        window.open("https://www.facebook.com");
    }
    function goTwitter(params) {
        window.open("https://www.twitter.com");
    }
    return (
        <nav>
            <Link to='/' className ='logo'>
                <Logo className ='logo'></Logo>
            </Link>
            <ul className="navLinks">
                <li>
                    <Link to='/' id='nav-links'>Home</Link>
                </li>
                <li>
                    <Link to='/services' id='nav-links'>Services</Link>
                </li>
                <li>
                    <Link to='/products' id='nav-links'>Products</Link>
                </li>
                <li>
                    <Link to='/about' id='nav-links'>About</Link>
                </li>
                <li>
                    <Link to='/contact' id='nav-links'>Contact</Link>
                </li>
            </ul>
            <div className="links">
                
                <FaLinkedin className='link-linkedin' id='link' onClick={goLinkedIn}></FaLinkedin>
                <FaFacebookSquare className='link-fb' id='link' onClick={goFacebook}></FaFacebookSquare>
                <FaTwitterSquare className="link-twit" id='link'onClick={goTwitter}></FaTwitterSquare>
            </div>
            <div className="burger" onClick={toggleNav}>
                <div 
                className="line1"
                style={{
                    transform: lineRotation1,
                    top: lineTop
                }}>
                </div>
                <div 
                className="line2"
                style={{
                    opacity: line2Opacity
                }}>
                </div>
                <div 
                className="line3"
                style={{
                    transform: lineRotation3,
                    top: lineBottom
                }}>
                </div>
            </div>

            <nav className="slide-nav"
                style={{
                    width: width
                }}
            >
            <ul className="slide-nav-links" >
                <li>
                    <Link 
                        to='/' 
                        id='slide-nav-links'
                        onClick={scrollUp}
                        >
                        Home
                    </Link>
                </li>
                <li>
                    <Link 
                        to='/services' 
                        id='slide-nav-links' 
                        onClick={scrollUp}>
                            Services
                        </Link>
                </li>
                <li>
                    <Link 
                        to='/products' 
                        id='slide-nav-links' 
                        onClick={scrollUp}>
                        Products
                    </Link>
                </li>
                <li>
                    <Link 
                        to='/about' 
                        id='slide-nav-links' 
                        onClick={scrollUp}>
                        About
                    </Link>
                </li>
                <li>
                    <Link 
                        to='/contact' 
                        id='slide-nav-links' 
                        onClick={toggleNav}>
                            Contact
                    </Link>
                </li>            
            </ul>
            <div id="links">
                <FaLinkedin className='link-linkedin' id='link' onClick={goLinkedIn}></FaLinkedin>
                <FaFacebookSquare className='link-fb' id='link' onClick={goFacebook}></FaFacebookSquare>
                <FaTwitterSquare className="link-twit" id='link' onClick={goTwitter}></FaTwitterSquare>
            </div>
        </nav>
            
        </nav>
    )
}

export default Navbar
