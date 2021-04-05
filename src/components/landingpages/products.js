import React from 'react'
import '../css-components/servicesProducts.css'
import productsBanner from '../images/products-banner.jpg'
import {FaReceipt, FaTruck,FaTv, FaUser, FaHospital, FaUserSecret} from "react-icons/fa";


function Products() {
    return (
        <div className='servProd'>
            <div className='servProd-title'>
                <h1>Products</h1>
                <h4>
                    Prebuilt solutions and accelerators in the FInancial 
                    Services domain
                     (KYC & Client Onboarding) and Healthcare domain
                     (Childhood preventative care schedule and developmental
                    milestone tracking).
                </h4>
            </div>

            <img src={productsBanner} alt=""className='servProd-banner'/>

            <div className='servProd-main'>
                <div className="container">
                    <FaTruck className='Fa'></FaTruck>
                    <div className='servProd-titles'>
                        Insig - Customer Journey Events
                    </div> 
                    <div className='servProd-paragraph'>
                        Events are the heart of our customers/clients 
                        interactions. Integrated, intelligent 
                        and insightful calendaring
                    </div> 
                </div>
                <div className="container">
                    <FaUserSecret className='Fa'></FaUserSecret>
                    <div className='servProd-titles'>
                        Jingbao - Fraud Prevention
                    </div> 
                    <div className='servProd-paragraph'>
                        Proactive monitoring of customers 
                        to identify anomalous behavior and preempt fraud exposure
                    </div> 
                </div>
                <div className="container">
                    <FaReceipt className='Fa'></FaReceipt>
                    <div className='servProd-titles'> 
                        Der Report - Business Intelligence Reporting
                    </div> 
                    <div className='servProd-paragraph'>
                        Business Intelligence reporting based on Industry 
                        data models and analytics.
                    </div> 
                </div>
                <div className="container">
                    <FaHospital className='Fa'></FaHospital>
                    <div className='servProd-titles'>
                    Jeunesse - Youth HealthCare
                    </div> 
                    <div className='servProd-paragraph'>
                        Based on guidelines from the center for disease control (CDC).
                        Vaccination Scheduling and developmental milestone tracking
                    </div> 
                </div>
                <div className="container">
                    <FaUser className='Fa'></FaUser>
                    <div className='servProd-titles'>
                        Sfera - Customer 360 Degree
                    </div> 
                    <div className='servProd-paragraph'>
                        reveal the true deep meaning of your relationship 
                        with your customers. Comprehensive, Adaptive, and Expansive. 
                    </div> 
                </div>
                <div className="container">
                    <FaTv className='Fa'></FaTv>
                    <div className='servProd-titles'>
                        Revelar KYC Client Onboarding
                    </div> 
                    <div className='servProd-paragraph'>
                        This element represents the description field.
                    </div> 
                </div>
            </div>
        </div>
    )
}

export default Products
