import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import styles from './Navbar.module.css'


function Navbar() {
  return (
    <div className='fixed w-full h-20 bg-gray-100 z-20'>
      <div className='flex justify-between items-center w-full h-full px-10 2xl:px-16 ml-6'>
        <Image src= '/../public/asset 0.png' alt='logo' width='125' height="50"/>
        <div >
            <ul className={`${styles['navbar']} hidden md:flex mr-6 `}>
                <Link href='/'>
                    <li className='ml-10 text-xs uppercase tracking-widest'>ABOUT EFESO</li>
                </Link>
                <Link href='/'>
                    <li className='ml-10 text-xs uppercase tracking-widest'>EXPERTISE</li>
                </Link>
                <Link href='/'>
                    <li className='ml-10 text-xs uppercase tracking-widest'>INDUSTRIES</li>
                </Link>
                <Link href='/'>
                    <li className='ml-10 text-xs uppercase tracking-widest'>KNOW NOW</li>
                </Link>
                <Link href='/'>
                    <li className='ml-10 text-xs uppercase tracking-widest'>CAREERS</li>
                </Link>
                <Link href='/'>
                    <li className='ml-10 text-xs uppercase tracking-widest'>CONTACT US</li>
                </Link>
                <Link href='/'>
                    <li className='ml-10 text-xs uppercase tracking-widest'>SEARCH</li>
                </Link>
            </ul>
     
          
          
        </div>
      </div>
    </div>
  )
}

export default Navbar