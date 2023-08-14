import React from 'react'
import styles from './Footer.module.css'
import Image from 'next/image'


function Footer() {
  return (
    <div className={`bg-[#e2e1e1] w-[100%] h-[400px] ${styles['footer']}`}>
       <div className={`${styles['footer-container']}`}>
         <Image src='/assets/asset 16.png' alt='/' width='100' height='100' className={`${styles['image']}`} />

         <div className={`${styles['footer-text']}`}>
            <h2>QUICK LINKS</h2>

            <a href="#">PRIVACY POLICY</a>
            <a href="#">CODE OF CONDUCT</a>
            <a href="#">COOKIE POLICY</a>
            <a href="#">LOGIN ADMIN</a>
            <a href="#">SEARCH</a>
         </div>

         <div className={`${styles['footer-text']}`}>
            <h2>HEAD OFFICE</h2>

            <p>117 Avenue des Champs Elysées, 75008, Paris, France</p>

            <a href="#">+234-800-0000</a>
            <a href="#">info.marketing@efeso.com</a>
         </div>
       </div>

       <div className={`${styles['text']}`}><p>© EFESO Consulting | replication by Alalade Motunrayo</p></div>

       
    </div>

    
  )
}

export default Footer
