import React from 'react'
import './Styles/SocialBar.css'
import FbIcon from '../assets/svg/fbIcon'
import LinkdnIcon from '../assets/svg/linkdnIcon'
import InstaIcon from '../assets/svg/InstaIcon'
import XIcon from '../assets/svg/xIcon'
export default function SocialBar() {
    return (
        <div className="social-bar">
            <div className="line" />

            <div className="icon"><InstaIcon /></div>
            <div className="icon"><XIcon /></div>
            <div className="icon"><LinkdnIcon /></div>
            <div className="icon"><FbIcon /></div>

            <div className="line" />
        </div>
    )
}
