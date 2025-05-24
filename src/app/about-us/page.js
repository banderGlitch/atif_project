import { BlueButton } from '@/components/buttons/BlueButton'
import GreenButton from '@/components/buttons/GreenButton'
import React from 'react'
import "./about-us.scss"
import WhyChooseClyborn from '@/components/cards/WhyChooseClyborn'

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
                                        <WhyChooseClyborn item={item}/>
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
            </div>
        </div>
    )
}

export default page