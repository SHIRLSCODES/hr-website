import React from 'react'
import Image from 'next/image'
import styles from './WhoWeAre.module.css'

function WhoWeAre() {
  return (
   <div id='whoWeAre'>
    <div className='bg-[#e6e3e3] mt-1 pb-40'>
        <div className={`${styles.header}`}>
        <h1>OUR DNA</h1>
        <h2>We deliver sustainable impact</h2>
        </div>

        <div className={`${styles.section} m-[auto]`}>
            <div className={`${styles['relative']}`}>
               <Image src='/assets/asset 27.jpeg' alt='/'  width='200' height='100' unoptimized className={`${styles['image']} object-cover`}/>
               <div className={`${styles['overlay']}`}>
                <p className={`${styles['overlay-text']}`}>Manufacturing Excellence</p>
               </div>
            </div>
            <div className={`${styles['relative']}`}>
               <Image src='/assets/asset 28.jpeg' alt='/'  width='200' height='100' unoptimized className={`${styles['image']} object-cover`}/>
               <div className={`${styles['overlay']}`}>
                <p className={`${styles['overlay-text']}`}>Industrial Sustainability</p>
               </div>
            </div>
            <div className={`${styles['relative']}`}>
               <Image src='/assets/asset 29.jpeg' alt='/'  width='200' height='100' unoptimized className={`${styles['image']} object-cover`}/>
               <div className={`${styles['overlay']}`}>
                <p className={`${styles['overlay-text']}`}>Human Dynamics and Change Management</p>
               </div>
            </div>
            
        </div>
    </div>
    </div>
  )
}

export default WhoWeAre