import Image from 'next/image'
import React from 'react'
import styles from './ExploreDetails.module.css'
import {FaArrow} from 'react-icons/fa'


function ExploreDetails() {
  return (
    <div>
    <div className={` ${styles['explore-container']}`}>
        <div className={`${styles['explore']}`}>
            <div className={`${styles['explore-image']}`}>
                <Image src='/assets/asset 2.jpeg' alt='/' width={200} height={200} unoptimized className={`${styles['explore-image']}`} />
            </div>
            <div className={`${styles['explore-details-text']}`}>
                <p>Behavioral development in a large-scale retail channel improved: Planning and forecast KPIs to 98%, picking lines OK 99.9%</p>
            </div>
        </div>

        <div className={`${styles['explore']}`}>
            <div className={`${styles['explore-image']}`}>
                <Image src='/assets/asset 10.jpeg' alt='/' width={200} height={200} unoptimized className={`${styles['explore-image']}`} />
            </div>
            <div className={`${styles['explore-details-text']}`}>
                <p>Mobilising an insurance company workforce to achieve the full digitisation of operational processes</p>
            </div>
        </div>

        <div className={`${styles['explore']}`}>
            <div className={`${styles['explore-image']}`}>
                <Image src='/assets/asset 24.jpeg' alt='/' width={200} height={200} unoptimized  className={`${styles['explore-image']}`} />
            </div>
            <div className={`${styles['explore-details-text']}`}>
                <p>WCOM implementation in an electrical company with operational cost reduction of EUR 8-10 m</p>
            </div>
        </div>
         
    </div>
    <div className={`${styles['buttonContainer']}`}>
   <button className={`${styles['button']}`}>Start a conversation with us </button>
   </div>
    </div>
  )
}

export default ExploreDetails