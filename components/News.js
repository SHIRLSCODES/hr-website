import React from 'react'
import Image from 'next/image'
import styles from './News.module.css'

function News() {
  return (
    <div className='bg-[#ffffff] mt-[50px] pt-[50px] pb-[50px]'>
        <div className={`${styles['news-header']}`}>
            <h3>STAY TUNED</h3>
            <h4>Our latest news & events</h4>
        </div>

        <div className='flex flex-row w-[1200px] bg-white shadow-md h-[400px] m-auto'>
          <div className={`${styles['news']}`}>
            <div>
                <Image src='/../public/asset 12.jpeg' alt='/' width={200} height={200} className={`${styles['news-image']}`} />
            </div>
            <div className={`${styles['news-text']}`}>
                <p>EFESO Belgium is in the top 8% of their class for its sustainability achievement at EcoVadis</p>
            </div>
          </div>

          <div className={`${styles['news']}`}>
            <div>
                <Image src='/../public/asset 13.jpeg' alt='/' width={200} height={200} className={`${styles['news-image']}`} />
            </div>
            <div className={`${styles['news-text']}`}>
                <p>EFESO Management Consultant Partners with Solo Sailor Axel Trehin to Support Project Rescue Ocean</p>
            </div>
          </div>

          <div className={`${styles['news']}`}>
            <div>
                <Image src='/../public/asset 14.jpeg' alt='/' width={200} height={200} className={`${styles['news-image']}`} />
            </div>
            <div className={`${styles['news-text']}`}>
                <p>EFESO joins forces with Tsetinis Consulting to further accelerate its global growth journey.</p>
            </div>
          </div>

          <div className={`${styles['news']}`}>
            <div>
                <Image src='/../public/asset 15.jpeg' alt='/' width={200} height={200} className={`${styles['news-image']}`} />
            </div>
            <div className={`${styles['news-text']}`}>
                <p>EFESO Consulting recognized for its supply chain expertise by Supply Chain Movement magazine.</p>
            </div>
          </div>
        </div>
    </div>
  )
}

export default News