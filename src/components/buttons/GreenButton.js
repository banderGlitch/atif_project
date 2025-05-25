import React from 'react'
import "./buttonStyle.scss"
const GreenButton = ({text}) => {
    return (
        <div><button className="cta-button cta-buy">{text}</button></div>
    )
}

export default GreenButton