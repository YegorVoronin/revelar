import React from 'react'
import '../css-components/servicesProducts.css'
import servicesBanner from '../images/services-banner.jpg'
import { FaKey, FaCloudsmith, FaCodeBranch, FaBrain  } from "react-icons/fa";


function Services() {
    return (
        <div className='servProd'>
            <div className='servProd-title'>
                <h1>Services</h1>
                <h4>Consulting services focused on implementing  business 
                    solutions using iBPMS, Data Modeling, Artificial Intelligence 
                    & Machine Learning, Cyber Security
                </h4>
            </div>

            <img src={servicesBanner} alt=""className='servProd-banner'/>

            <div className='servProd-main'>
                <div className="container">
                    <FaBrain className='Fa'></FaBrain>
                    <div className='servProd-titles'>
                        Intelligent Business Process Management
                    </div> 
                    <div className='servProd-paragraph'>
                        Engage our experts to help you get the most 
                        of your iBPMS platforms. 
                        Expertise in Pega, OpenText, 
                        IBM BPM, Alfresco Process Services and more.
                    </div> 
                </div>
                <div className="container">
                    <FaCloudsmith className='Fa'></FaCloudsmith>
                    <div className='servProd-titles'>
                        Data Modeling
                    </div> 
                    <div className='servProd-paragraph'>
                        Structuring your data the optimal way is the key to unleashing its potential. 
                        We start with industry leading models and extend to support our customer needs.
                    </div> 
                </div>
                <div className="container">
                    <FaCodeBranch className='Fa'></FaCodeBranch>
                    <div className='servProd-titles'>
                        Artificial Intelligence (AI) and Machine Learning (ML)
                    </div> 
                    <div className='servProd-paragraph'>
                        Set your organization up to succeed in tomorrow's technology 
                        landscape. Convolutional Neural Networks, Boltzman machines.
                    </div> 
                </div>
                <div className="container" id='clearContainer'></div>
                <div className="container">
                    <FaKey className='Fa'></FaKey>
                    <div className='servProd-titles'>
                        Cyber Security
                    </div> 
                    <div className='servProd-paragraph'>
                        Protect your customer's and your own data.
                    </div> 
                </div>
                <div className="container"id='clearContainer'></div>
            </div>
        </div>
    )
}

export default Services
