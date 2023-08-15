import Image from 'next/image'
import React from 'react'
import styles from './Discover.module.css'


function Discover() {
    return (
        <div className={`mt-[100px] px-[40px] flex items-center justify-between w-full ${styles['discover-section']}`}>
            
            <div className={`w-[40%] ${styles['discover-text']}`} 
            data-aos="fade-up"  
            data-aos-offset="200"
    data-aos-delay="50"
    data-aos-duration="2000"
    data-aos-easing="ease-in-out"
            >
                
                <span className='tracking-widest text-[#ff7918] text-[17px] font-medium'>DISCOVER</span><br></br>
                <span className='text-[#53565a] text-[32px] leading-[45px] font-bold'>EFESO Management Consultants at a glance</span>
                <p className='mt-[15px] leading-[28px] text-[17px] text-[#111111] font-normal'>EFESO is a global consulting group specialized in operations strategy and performance improvement. We have been operating in the industrial environment over the last 40 years, working side-by-side with our clients to accelerate their transformation towards future-proof operations.<br></br>
               We aim at contributing to a better and sustainable industrial world. Each year, we deliver over 1,000 projects for clients across our 35 offices around the world, helping them achieve outstanding business outcomes, and sustainable change</p>
            </div>
       
            <div className={`flex gap-[20px] ${styles['discover-image']}`}   
            data-aos="fade-up" data-aos-duration="2000"
            >
                <div className={`${styles['relative']}`}>
                    <Image src='/assets/asset 23.jpeg' alt='/' width='100' height="100" className= {` w-[150px] h-[300px] object-cover ${styles['image']}`}/>
                    <div className={`${styles['overlay']}`}><p className={`${styles['overlay-text']}`}>ABOUT EFESO</p></div>
                </div>
                <div className={`${styles['relative']}`}><Image src='/assets/asset 25.jpeg' alt='/' width='100' height="100" className= {` w-[150px] h-[300px] object-cover ${styles['image']}`}/><div className={`${styles['overlay']}`}><p className={`${styles['overlay-text']}`}>INDUSTRIES WE SUPPORT</p></div></div>
                <div className={`${styles['relative']}`}><Image src='/assets/asset 26.jpeg' alt='/' width='100' height="100" className= {` w-[150px] h-[300px] object-cover ${styles['image']}`}/><div className={`${styles['overlay']}`}><p className={`${styles['overlay-text']}`}>NEWS</p></div></div>
                <div className={`${styles['relative']}`}><Image src='/assets/asset 24.jpeg' alt='/' width='100' height="100" className= {` w-[150px] h-[300px] object-cover ${styles['image']}`}/><div className={`${styles['overlay']}`}><p className={`${styles['overlay-text']}`}>JOIN US</p></div></div>
            </div>
        </div>
    )
   
}

export default Discover