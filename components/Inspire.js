import Image from 'next/image'
import React from 'react'
import styles from './Inspire.module.css'

function Inspire() {
  return (
    <div id='inspire'>
    <div className={`bg-[#e6e3e3] mt-[120px] flex w-[100%] pb-[120px] pt-[80px] pl-[100px] ${styles['inspire-container']}`}>
       <div  className={`${styles['inspire-text']}`}>
        <h3>BE INSPIRED</h3>
        <h1>Our latest Insights</h1>
        <p>Our latest thinking on the issues that matter most in business and operations topics.</p>
       </div>

       <div className={`${styles['inspire']}`} data-aos="fade-up"  data-aos-duration="4000">
        <Image src='/assets/inspire.jpg' alt='/' width='100' height='100' unoptimized className={`${styles['inspire-image']}`}/>
        <div className={`${styles['overlay']}`} >
           <p className={`${styles['overlay-text']}`}>
           How EFESO is Helping Retailers like Primark Develop Sustainable Supply Chain Strategies
           </p>

           <button className= {`${styles['button']}`}>READ MORE</button>
        </div>
       </div>
    </div>
    </div>
  )
}

export default Inspire