"use client"; 

import LeftMenu from '../components/LeftMenu'
import React, { useState } from 'react';
import Button from '../components/Button';


function page() {
  const [isHidden, setIsHidden] = useState(false);

  function handleClick() {
    setIsHidden(!isHidden);
  }

  return (
    <div className='dashboard-wrapper flex'>
      <LeftMenu className={isHidden ? 'hidden animated' : 'visible animated'} />
      <Button isHidden={isHidden} handleClick={handleClick}/>
      </div>
  )
}

export default page