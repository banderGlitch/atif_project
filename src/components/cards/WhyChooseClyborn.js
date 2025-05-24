import React from 'react'
import ArrowIcon from '@/static/images/svg/arrowIcon'
import "./WhyChooseClyborn.scss"

const WhyChooseClyborn = ({item}) => {
  return (
        <div className="WhyChooseClyborn-card">
            <div className="icon">
                <ArrowIcon />
            </div>
            <h5 className="feature-title">{item?.heading}</h5>
            <p className="feature-desc">{item.para}</p>
        </div>
  )
}

export default WhyChooseClyborn