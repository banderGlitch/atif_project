import React from 'react'
import "../static/styles/ComponentCss/SocialBar.css"
import FbIcon from '../static/images/svg/fbIcon'
import LinkdnIcon from '../static/images/svg/linkdnIcon'
import InstaIcon from '../static/images/svg/InstaIcon'
import XIcon from '../static/images/svg/xIcon'

function SocialBar() {
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


export default SocialBar;