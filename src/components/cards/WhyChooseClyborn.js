import React from 'react'
import ArrowIcon from '@/static/images/svg/arrowIcon'
import "./WhyChooseClyborn.scss"

const WhyChooseClyborn = ({ item }) => {
  return (
    <div className="whychoose-card">
      <div className="icon-title-row">
        <div className="icon">
          <ArrowIcon />
        </div>
        <h5 className="feature-title">{item?.heading}</h5>
      </div>
      <p className="feature-desc">{item?.para}</p>
    </div>
  );
}

export default WhyChooseClyborn