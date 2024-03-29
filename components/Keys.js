import React from 'react'
import styles from './Key.module.css'

function Keys() {
  return (
    <div id='keys'>
    <div className={`bg-[#e6e3e3] w-[100%] h-[400px] ${styles['key-container']}`}>
        <div className={`${styles['key-heading']}`}>
            <h1>EFESO Key Figures</h1>
        </div>
       <div className={`${styles['key-text']}`}
       data-aos="fade-up"
     data-aos-offset="300"
     data-aos-easing="ease-in-sine" 
     data-aos-duration="4000"
     >
        <div>
         <h1>1300</h1>
         <p>ASSIGNMENTS/YEAR</p>
         </div>

         <div>
         <h1>800</h1>
         <p>EXPERTS</p>
         </div>

         <div>
         <h1>35</h1>
         <p>OFFICES GLOBALLY</p>
         </div>

         <div>
         <h1>4-18</h1>
         <p>BENEFIT-COST RATIO</p>
         </div>
       </div>
    </div>
    </div>
  )
}

export default Keys