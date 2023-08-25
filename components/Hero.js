import Image from 'next/image'
import React from 'react'
import styles from './Hero.module.css'

function Hero() {


  return (
    <div>
     
      <div className={`${styles['hero-image']}`} >
        <Image src='/assets/asset 21.jpeg' alt='/' width='1400' height="30" unoptimized className={`${styles['hero-image']}`} />
      </div>
  
    
    </div>
  ) 

 
}

export default Hero