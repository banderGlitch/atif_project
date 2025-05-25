import { BlueButton } from '@/components/buttons/BlueButton'
import GreenButton from '@/components/buttons/GreenButton'
import React from 'react'
import Image from 'next/image';
import "./about-us.scss"
import WhyChooseClyborn from '@/components/cards/WhyChooseClyborn'
import LeadersCards from '@/components/cards/LeadersCards'
import Underline from '@/components/cards/Underline'
import HowWork from '@/components/cards/HowWork'
import Madalen from '@/static/images/svg/Madalen'
import Horizon from '@/static/images/svg/Horizon'   
import Xen from '@/static/images/svg/Xen'

import vectorSmartImg from '../../../public/images/vectorSmartDecorator.png'   


const page = () => {
    return (
        <div className='about-us'>
            <div className='page-sections'>
                {/* //section-1 */}
                <div className='section-1'>
                    <div className='wrap-page'>
                        <div className='heading'>
                            <h1 className='main-heading-blue'>Unlocking Business Value with Precision and Purpose</h1>
                        </div>
                        <div className='para main-heading-green '>
                            <p>Empowering Decisions with Smart Valuation Tools</p>
                        </div>
                        <div className='full-text'>
                            <p>At Clybourne, we bridge technology and expertise to deliver transparent, data-driven business valuations. Whether you're scaling, seeking investment, or planning for a future sale, our platform equips you with actionable insights to drive confident decisions.  </p>
                        </div>

                        <div className='buttons'>
                            <BlueButton text={"Let’s Talk!"} />
                            <GreenButton text={"Let’s Talk!"} />
                        </div>

                    </div>
                </div>

                {/* why choose clyborn section  */}
                <div className='why-choose-section'>
                    <div className='wrap-page'>
                        <div className='heading'>
                            <h2 className='main-heading-blue'>Why Choose Clybourne?</h2>
                        </div>
                        <div className='para main-heading-green '>
                            <p>Valuation Simplified, Accuracy Amplified</p>
                        </div>
                        <div className='full-text'>
                            <p>We redefine the valuation experience by combining:</p>
                        </div>

                        <div className='cards'>
                            {
                                [
                                    {
                                        heading: "AI Precision",
                                        para: "Cutting-edge algorithms delivering real-time, accurate data."
                                    },
                                    {
                                        heading: "Expert Insights",
                                        para: "Seasoned professionals guiding every valuation."
                                    },
                                    {
                                        heading: "Seamless Experience",
                                        para: "A user-friendly valuation platform for efficient outcomes."
                                    }
                                ].map((item, index) => (
                                    <div key={index}>
                                        <WhyChooseClyborn item={item} />
                                    </div>
                                ))

                            }
                        </div>
                    </div>
                </div>

                {/* global reach  */}
                <div className='global-reach'>
                    <div className='wrap-page'>
                        <div className='left'>
                            <div className='heading main-heading-blue'>
                                <h1>Global Reach, Local Expertise</h1>
                            </div>
                            <div className='para main-heading-green '>
                                <p>Your Trusted Partner Worldwide</p>
                            </div>
                        </div>
                        <div className='full-text'>
                            <p>Founded in the United States, we now support businesses in India, the UK, and Singapore. Our mission is to simplify valuations for businesses of every size, wherever they operate.</p>
                        </div>
                    </div>
                </div>

                {/*\clybourn promise */}
                <div className='clybourn-promise'>
                    <div className='wrap-page'>
                        <div className='left'>
                            <div className='heading'>
                                <h1 className='main-heading-blue'>The Clybourne Promise</h1>
                            </div>
                            <div className='para '>
                                <p className='main-heading-green'>Reliability, Innovation, and Customer-Centricity</p>
                            </div>
                        </div>
                        <div className='full-text'>
                            {[
                                {
                                    "heading": "Accuracy You Can Trust",
                                    "para": "Precision-driven results tailored to your business."
                                },
                                {
                                    "heading": "Technology Meets Care",
                                    "para": "Innovation simplified to suit your goals."
                                },
                                {
                                    "heading": "Client-First Approach",
                                    "para": "Your success is our priority."
                                }
                            ].map((item, index) => (
                                <div key={index} className='content'>
                                    <h2>
                                        {item.heading}
                                    </h2>
                                    <p>
                                        {item.para}
                                    </p>
                                </div>
                            ))
                            }
                        </div>
                    </div>
                </div>

                {/* Meet Our Visionaries */}
                <div className='meet-visionaries'>
                    <div className="visionary-svg">
                    <Image src={vectorSmartImg} alt="vectorSmart" width={1000} height={1000} />
                    </div>
                    <div className='wrap-page'>
                        <div className='heading'>
                            <h2 className='main-heading-blue'>Meet Our Visionaries</h2>
                        </div>
                        <div className='para'>
                            <p className=' main-heading-green '>Leaders Who Inspire Confidence</p>
                        </div>
                        <div className='full-text'>
                            <p>Behind Clybourne is a team of experts with decades of experience in business valuation and technology. Together, they ensure you get insights that matter.</p>
                        </div>

                        <div className='cards'>
                            {[
                                {
                                    "image": "https://www.bankrate.com/brp/2025/02/06145605/elon-musk-2025-worlds-richest-person.jpg?auto=webp&optimize=high&crop=16:9",
                                    "name": "Manish Kumar",
                                    "profile": "Director"
                                },
                                {
                                    "image": "https://www.bankrate.com/brp/2025/02/06145605/elon-musk-2025-worlds-richest-person.jpg?auto=webp&optimize=high&crop=16:9",
                                    "name": "Manish Kumar",
                                    "profile": "Director"
                                },
                                {
                                    "image": "https://www.bankrate.com/brp/2025/02/06145605/elon-musk-2025-worlds-richest-person.jpg?auto=webp&optimize=high&crop=16:9",
                                    "name": "Manish Kumar",
                                    "profile": "Director"
                                },
                                {
                                    "image": "https://www.bankrate.com/brp/2025/02/06145605/elon-musk-2025-worlds-richest-person.jpg?auto=webp&optimize=high&crop=16:9",
                                    "name": "Manish Kumar",
                                    "profile": "Director"
                                }
                            ].map((item, index) => (
                                <div key={index}>
                                    <LeadersCards item={item} />
                                </div>
                            ))
                            }
                        </div>
                    </div>
                </div>
                <Underline />
                {/*\how works */}
                <div className='how-works'>
                    <div className='main-container'>
                        <div className='wrap-page'>
                            <div className='left'>
                                <div className='heading'>
                                    <h1 className='main-heading-blue'>How Clybourne Works?</h1>
                                </div>
                                <div className='para '>
                                    <p className='main-heading-green'>Valuations Designed for Simplicity and Speed</p>
                                </div>
                            </div>

                            <div className='cards'>
                                {[
                                    {
                                        heading: (
                                            <>
                                                Connect <br /> Your Data
                                            </>
                                        ),
                                        para: "Plug into our secure and easy-to-use platform.",
                                    },
                                    {
                                        heading: (
                                            <>
                                                Generate <br /> Insights
                                            </>
                                        ),
                                        para: "AI-powered valuations delivered within 2 working days.",
                                    },
                                    {
                                        heading: (
                                            <>
                                                Take <br /> Action
                                            </>
                                        ),
                                        para: "Use insights to plan growth, investment, or sale with confidence.",
                                    },
                                ].map((item, index) => (
                                    <div key={index}>
                                        <HowWork item={item} />
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>

                {/*\industry-leaders */}
                <div className='industry-leaders'>
                    <div className='wrap-page'>
                        <div className='heading'>
                            <h1 className='main-heading-blue'>Trusted by Industry Leaders </h1>
                        </div>
                        <div className='para '>
                            <p className='main-heading-green'>Proven Results Across Businesses</p>
                        </div>
                        <div className='full-text'>
                            <p>From startups to enterprises, Clybourne empowers organizations to make informed, strategic decisions. </p>
                        </div>
                    </div>
                </div>
                <div className="brand-logos-section">
                    <div className="wrap-page">
                        <div className="logos-wrapper">
                            <Madalen />
                            <Horizon />
                            <Xen />
                            <Madalen />
                            <Horizon />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default page