import Hero from '@/components/Hero'
import Portfolio from '@/components/Portfolio'
import React from 'react'

function work() {
  return (
    <div>
        <Hero heading='My Work' message='This is some of recent work exploring the continents.'/>
        <Portfolio />
    </div>
  )
}

export default work