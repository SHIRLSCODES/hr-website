import React from 'react'
import styles from './Key.module.css'

function Keys() {
  return (
    <div className={`bg-[#e6e3e3] w-[100%] h-[400px] ${styles['key-container']}`}>
        <div className={`${styles['key-heading']}`}>
            <h1>EFESO Key Figures</h1>
        </div>
       <div className={`${styles['key-text']}`}>
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
  )
}

export default Keys