import Image from 'next/image';
import React from 'react';
import LeaderImage from "../../static/images/icons/heroicons/HeroImg_1.png"

const LeadersCards = ({ item }) => {
  return (
    <div className='leader-card'>
      <div className='photo'>
        <Image
          src={LeaderImage}
          alt={item.phto}
          width={200}
          height={200}
          className='leader-photo'
        />
      </div>
      <div className='name'>{item.name}</div>
      <div className='profile'>{item.profile}</div>
    </div>
  );
};

export default LeadersCards;
