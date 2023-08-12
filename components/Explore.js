import Image from 'next/image'
import React from 'react'
import styles from './Explore.module.css'

function Explore() {
  return (
    <div className={`${styles['explore']}`}>
       <Image src='/../public/asset 32.webp' alt='/' width={1400} height={100} className={`${styles['image']}`}/>
       <div className={`${styles['explore-text']}`} >
        <h2>EXPLORE</h2>
        <h3>Our Client Success Stories</h3>
       </div>
    </div>
  )
}

export default Explore