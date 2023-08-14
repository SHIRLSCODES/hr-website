import Image from 'next/image'
import Link from 'next/link'
import {AiOutlineClose, AiOutlineMenu} from 'react-icons/ai'
import React, {useState} from 'react'
import styles from './Navbar.module.css'


function Navbar() {
    const [nav, setNav] = useState(false)

    const handleNav = () => {
        setNav(!nav)
    }

  return (
    <div className='fixed top-0 w-full h-20 bg-gray-100 z-20'>
      <div className='flex justify-between items-center w-full h-full px-10 ml-6 xlsm:ml-0'>
        <Image src= '/assets/asset 0.png' alt='logo' width='125' height="50" className={`${styles['image']}`}/>
        <div >
            <ul className={`${styles['navbar']} flex md:flex mr-6 xlsm:mr-0`}>
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
        <div onClick={handleNav} className='hidden md:block'>
         {
            !nav ? <AiOutlineMenu size={20} /> : <AiOutlineClose size={20} />
         }
        </div>
      </div>

     
       <div className={nav===true ? 'block fixed left-0 top-0 w-[50%] border-r  h-full bg-[#f0f0ed] ease-in-out duration-500' : 'hidden fixed left-[-100%] top-0 w-[50%] border-r  h-full bg-[#f0f0ed]'}>
      <Image src= '/assets/asset 0.png' alt='logo' width='200' height="50" className={`mt-10 ml-6 w-[200px]${styles['image']}`}/>
         <ul className={`pt-10  ${styles['navbar-mobile']}`}>
           <Link href='/'><li className='p-4'>ABOUT EFESO</li></Link>
           <Link href='/'><li className='p-4'>EXPERTISE</li></Link>
           <Link href='/'><li className='p-4'>INDUSTRIES</li></Link>
           <Link href='/'><li className='p-4'>KNOW NOW</li></Link>
           <Link href='/'><li className='p-4'>CAREERS</li></Link>
           <Link href='/'><li className='p-4'>CONTACT US</li></Link>
           <Link href='/'><li className='p-4'>SEARCH</li></Link>
         </ul>
      </div> 
    </div>
  )
}

export default Navbar