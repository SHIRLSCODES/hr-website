import Hero from '@/components/Hero'
import Contact from '@/components/Contact'
import React from 'react'

function contact() {
  return (
    <div>
        <Hero heading='Contact Me!' message= 'Submit the form below for more work and quotes.'/>
        <Contact />
    </div>
  )
}

export default contact