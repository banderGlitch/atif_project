import React from 'react'
import "./HowWork.scss"

const HowWork = ({item}) => {
  return (
    <div className='how-work'>
        <h2>{item.heading}</h2>
        <p>{item.para}</p>
    </div>
  )
}

export default HowWork