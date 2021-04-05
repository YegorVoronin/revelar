import React from 'react'
import '../css-components/home.css'
import laptop from '../images/laptop.jpg'
import codeBanner from '../images/code-banner.jpg'
import { FaCog } from "react-icons/fa";

function Home() {
    function newsletterSub(e) {
        e.preventDefault()
    }
    function getName(val) {
        
    }
    function getEmail(val) {
        
    }
    function getPhone(val) {
        
    }

    function Article1(params) {
        window.open("https://pumulosikaneta.wordpress.com/2017/06/26/a-brief-history-of-ai-and-the-ethical-dilemmas-posed-part-1-xiaoice/");
    }
    function Article2(params) {
        window.open("https://pumulosikaneta.wordpress.com/2017/06/27/a-brief-history-of-ai-and-the-ethical-dilemmas-posed-part-2-tay/");
    }
    function Article3(params) {
        window.open("https://pumulosikaneta.wordpress.com/2017/06/28/a-brief-history-of-ai-and-the-ethical-dilemmas-posed-part-3-black-box-ai-ethics/");
    }
    function Article4(params) {
        window.open("https://pumulosikaneta.wordpress.com/2017/06/26/opportunities-to-accelerate-know-your-customer-kyc-compliance/");
    }
    function Article5(params) {
        window.open("https://pumulosikaneta.wordpress.com/2017/06/26/bpm-test-strategy-a-key-success-driver-not-an-afterthought/");
    }
    function Article6(params) {
        window.open("https://pumulosikaneta.wordpress.com/2017/06/26/bpm-is-for-all-company-sizes-target-the-right-opportunities-and-implement-the-right-way/");
    }
    return (
        <div className='home'>
            <div className='home-banner'>
                <div className='right-side-banner'>
                    <div className='home-logo'>
                        <div id='cogs'>
                            <div id='cogs2'>
                                <FaCog id='cog1'></FaCog>
                                <FaCog id='cog2'></FaCog>
                            </div>
                            <FaCog id='cog3'></FaCog>
                        </div>
                        <div>Revelar.</div>
                        <div className='global'>Global</div>
                    </div>
                    <div className='quote'>
                        Revealing the potential of tomorrow's software today
                    </div>
                </div>
                <img src={laptop} alt="" className="laptop"/>
            </div>
            <div className='home-banner2'>
                <div className ="title-home-banner2">
                    Designed for Humans
                </div>
                <div>
                    We hire the right mix of technology experts, 
                    domain experts, and liberal arts experts. This mix encourages 
                    our teams to focus on how to implement innovative 
                    technolologies that solve real business 
                    challenges in a way that non-technical users 
                    can utilize and appreciate.
                </div>
                <div>
                    Every successful engagement should leave our customers 
                    enabled to maintain and support their solutions internally. 
                    We provide training and knowledge transfer planning as part 
                    of all of our engagements 
                </div>
            </div>
            
            <div className='consulting'>
                <div className='consult-quote'>
                    Using the technologies of tomorrow 
                    to provide our customers with a competitive edge
                </div >
                <div className='consult-title'>
                    Consulting +
                </div>
                <div className='consultPar'>
                    Software development is evolving rapidly with the 
                    advances in technology opening up new and exciting 
                    possibilities. Our teams focus on leveraging advances 
                    in artificial intelligence and machine learning to REVEAL 
                    new possibilities for our clients. Our iBPMS consultants 
                    take the insights provided and operationalize the 
                    opportunities into optimized processes and business 
                    solutions.
                </div>
                <img src={codeBanner} alt=""/>
            </div>

            <div className='platform'>
                <div className='platform-thinking'>Platform Thinking</div>
                <div className='platform-quote' >Viewing software as a window into data</div>
                <div className='platform-paragraph'>
                    Implementing siloed point solutions is a paradigm that 
                    limits the potential for truly transformational innovation. 
                    At Revelar we treat solutions as part of an overal business platform. 
                    The data gathered in individual solutions is modeled in a way that it 
                    can be accessed as appropriate by other solutions. This allows us to 
                    detect patterns and opportunities that were previously hidden from 
                    businesses. Customer interactions with our clients become a seemless 
                    journey with intelligent interventions and targetted cross/up sell.  
                </div>
            </div> 
                <div className='newsletter'>
                    <div className='newsletterquote'>
                        <div id='rev'>Revelar</div>
                        <div>can help you realize the true potential of your data</div>
                    </div>
                    
                    <form action="">
                        <div>
                            <div>NAME: <input type="text"/></div>
                            <div>EMAIL: <input type="text"/></div>
                            <div>PHONE: <input type="text"/></div>
                        </div>
                        <button onClick={newsletterSub}>Submit</button>
                    </form>
                </div>
                <div className="articles">
                    <div className='article' onClick={Article1}>
                        <div className='title'>
                            A brief history of AI and the ethical dilemmas posed: Part 1 – XiaoIce
                        </div>
                        <div className='art-body'>
                            The rapid advances of Artificial Intelligence have improved 
                            the human factor of machines to the point where we now need 
                            to address the capabilities for good versus evil within this 
                            new population of digital citizens. Like mankind itself, there 
                            is a concept of nature versus nurture in this debate. Unlike 
                            the average person, these machines are nurtured by a huge 
                            population...
                        </div>
                    </div>
                    <div className='article' onClick={Article2}>
                        <div className='title'>
                            A brief history of AI and the ethical dilemmas posed: Part 2 – Tay
                        </div>
                        <div className='art-body'>
                            The success of XiaoIce in China inspired the creation of 
                            an Artificial Intelligent Chatterbot in Western society. 
                            On March 23rd, 2016, Microsoft released Tay (Thinking About You). 
                            Like XiaoIce, Tay was based on learning algorithms that allowed it 
                            to interpret things people 
                            said to it, and then use this 
                            knowledge in conversations with other people...
                        </div>
                    </div>
                    <div className='article' onClick={Article3}>
                        <div className='title'>
                            A brief history of AI and the ethical dilemmas posed: Part 3 – Black box AI ethics
                        </div>
                        <div className='art-body'>
                        The first 2 parts to this series have focused on a subset of 
                        AI implementation -the chatbot. They are useful examples to 
                        show the ethical quandaries because, they are human-like beings 
                        that utilize AI capabilities. The strategies proposed to give 
                        them ethical boundaries 
                        are relevant because of their emulation of human nature...
                        </div>
                    </div>
                    <div className='article' onClick={Article4}>
                        <div className='title'>
                            Opportunities to Accelerate Know Your Customer (KYC) Compliance
                        </div>
                        <div className='art-body'>
                            The post September 11th financial services environment has placed 
                            increased emphasis on regulation and customer due diligence. 
                            Regulations surrounding Anti-Money Laundering (AML), Counter 
                            Terrorist Financing (CTF) and Know Your Customer (KYC) require 
                            strategy, human resources, and appropriate tooling to meet the 
                            demands placed on financial institutions to ensure that they stay 
                            in compliance with the law...
                        </div>
                    </div>
                    <div className='article' onClick={Article5}>
                        <div className='title'>
                            BPM Test Strategy – A Key Success Driver, Not an Afterthought
                        </div>
                        <div className='art-body'>
                            Business Process Management (BPM) platforms are an increasingly 
                            important component in today’s technology savvy enterprises. 
                            BPM provides a mechanism for orchestrating, automating, and 
                            tracking core processes across an organization...
                        </div>
                    </div>
                    <div className='article' onClick={Article6}>
                        <div className='title'>
                            BPM is for All Company Sizes – 
                            Target the Right Opportunities and Implement the Right Way
                        </div>
                        <div className='art-body'>
                            Historically Business Process Management (BPM) solutions 
                            have primarily been targeted at large enterprises. Smaller 
                            organizations have not invested as heavily due to perceived 
                            high costs and unknown value. However, BPM is a valuable tool
                            for almost any business. To realize its potential benefits, 
                            it needs to be applied to the right opportunities and 
                            in the right way...
                        </div>
                    </div>
                </div>
        </div>
    )
}

export default Home
