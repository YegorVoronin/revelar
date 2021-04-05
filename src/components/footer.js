import React from 'react'
import './css-components/footer.css'
import { FaLinkedin,FaFacebookSquare,FaTwitterSquare, FaLink } from "react-icons/fa";

function Footer() {
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
        <footer>
            <div className="links-footer">
                <FaLinkedin className='footer-link' onClick={goLinkedIn}></FaLinkedin>
                <FaFacebookSquare className='footer-link' onClick={goFacebook}></FaFacebookSquare>
                <FaTwitterSquare className='footer-link' onClick={goTwitter}></FaTwitterSquare>
            </div>
            <div className="quote-footer">
                Revealing the potential of tomorrow's software today
            </div>
            <div className="contact">
                <div>Phone: (984)-444-9039</div>
                <div>Email: y@revelar.global</div>
            </div>
        </footer>
    )
}

export default Footer
