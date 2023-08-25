import Image from 'next/image'
import React from 'react'
import styles from './Contact.module.css'

function Contact() {
  return (
    <div id='contact'>
    <div className={`bg-[#d1d0d0] w-[100%] h-[500px] ${styles['contact-container']}`}>
        <div className={`${styles['contact-heading']}`}>
            <h1>How can we help you?</h1>
            <p>GET IN TOUCH WITH US</p>
        </div>

        <div className={`${styles['contact-image']}`} data-aos="fade-up"  data-aos-duration="4000">
           <div>
            <Image src='/assets/asset 30.jpeg' alt='/' width='100' height='100' unoptimized className={`${styles['image']}`} />
           <div className={`${styles['text']}`}>
            <p>Our offices worldwide</p>
           </div>
           </div>

           <div>
            <Image src='/assets/asset 4.jpeg' alt='/' width='100' height='100' unoptimized className={`${styles['image']}`} />
           <div className={`${styles['text']}`}>
            <p>+234-800-0000</p>
           </div>
           </div>

           <div>
            <Image src='/assets/asset 14.jpeg' alt='/' width='100' height='100' unoptimized className={`${styles['image']}`} />
           <div className={`${styles['text']}`}>
            <p>Start a conversation</p>
           </div>
           </div>
        </div>
        
    </div>
    </div>
  )
}

export default Contact