import React from 'react'
import '../css-components/about.css'
import AboutBanner from '../images/about-banner.jpg'
import AboutImg from '../images/aboutIMG.jpg'
import {Link} from 'react-router-dom'

function About() {
    function scrollUp(params) {
        window.scrollTo(0, 0)
    }
    return (
        <div className='about'>
            <div className="header-body">
                <h1>About</h1>
                <h4>
                    We focus on innovation. Our team is 
                    comprised of experts in the fields of inteligent 
                    Business Process Management, Data Science, AI, 
                    Machine Learning, and Security
                </h4>
            </div>
            <img src={AboutBanner} className='about-banner'/>
            <div className="about-body">
                <img src={AboutImg} className="aboutIMG"/>
                <div className="about-p">
                    <p>
                        Revelar is a different kind of software company. 
                        We are small in size, but big in talent. Our philosophy 
                        is make the exceptional the new normal. We achieve this 
                        by focusing on quality over quantity. Our practices are 
                        headed by industry leaders in their respective fields; 
                        However, the focus on quality is present at all levels 
                        within the organization
                    </p>
                    <p>
                        All of our employees are incented based on our proprietary
                        Revelar k(ie)2  Scale
                        Knowledge, Innovation, Ethics, Initiave and Enthusiasm.
                    </p>
                    <p>
                    From the top down our teams are driven to exceed 
                    expectations and drive customer satisfaction. 
                    We support out team through constant training 
                    (each associate is required to spend 15% of their time on training 
                    related activity), 
                    internal hackathons and innovation 
                    rewards, and mandatory time off each quarter.
                    </p>
                </div>
            </div>
            <div className='about-contact'>
                <h3>
                    Are you interested in joining our team? 
                    Do you think you have what it takes to contribute 
                    to our joint success?
                </h3>
                <h3>
                    <Link to='/contact' id='contact-us' onClick={scrollUp}>
                        Contact Us to find out if Revelar may be 
                        the next step in your career! 
                     </Link>
                     
                </h3>
            </div>
        </div>
    )
}

export default About
