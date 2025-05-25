import Image from 'next/image';
import React from 'react';
import LeaderImage from "../../static/images/icons/heroicons/HeroImg_1.png"

const LeadersCards = ({ item }) => {
  return (
    <div className='leader-card'>
      <div className='photo'>
        <Image
          src={LeaderImage}
          alt={item?.phto}
          width={200}
          height={200}
          className='leader-photo'
        />
      </div>
      <div className="name">
        <p style={{color: "var(--theme-blue-color)", fontSize: "16px", fontWeight: "var(--font-weight-primary)"}}>{item.name}</p>
      </div>
      <div className='profile'>
        <p style={{color: "var(--text-grey-color)", fontSize: "12px", fontWeight: "var(--font-weight-primary)"}}>{item.profile}</p>
      </div>
    </div>
  );
};

export default LeadersCards;
